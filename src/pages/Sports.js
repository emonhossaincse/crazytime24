import React, { useEffect, useRef } from 'react';

// Mock function to simulate fetching data from an API
const fetchContentFromAPI = () => {
    return Promise.resolve(`<script type="text/javascript" src="https://sport.seriea.fun/js/Partner/IntegrationLoader.js"></script>
    <script src="https://sport.seriea.fun/js/partner/bootstrapper.min.js?gl=0.5&v=0.00"></script>
    <div id="sport_div_iframe"></div>
    <script type="text/javascript">
    
        function receiveMessage(event) {
            if (event.data.command == 'login') {
                login();
            } else if (event.data.command == 'registration') {
                                register();
                        }
        }
    
        function setLaunchConfig(check) {
            return {
                desktop: {
                    sp: [
                        ['server', 'https://sport.seriea.fun/'],
                        ['token', '1243995-123897-5cf3eeba146110e5744a35420a10dc47'],
                        ['currentPage', 'Overview'],
                        ['device', 'd'],
                        ['language', 'en'],
                        ['login', 'SportLogin'],
                        ['registration', 'SportRegistration'],
                        ["fixedHeight", true],
                                                                                    ["parent", ["seriea.fun","stage.game-program.com","www.six6.online"]],
                                        ],
                    initializeApplication: function(params) {
                        SportFrame.frame(params);
                    }
                },
                mobile: {
                    params: {
                        server: 'https://sport.seriea.fun/',
                        containerId: "sport_div_iframe",
                        token: '1243995-123897-5cf3eeba146110e5744a35420a10dc47',
                        defaultLanguage: 'en',
                        hashRouterDisabled: false,
                        loginTrigger: function() {
                            login();
                        }
                    },
                    initializeApplication: function(params) {
                        if(check) {
                            var height = returnMobileAppHeight();
                            Bootstrapper.bootIframe( params, { name: "Mobile" }, { height: height } );
                        } else {
                            Bootstrapper.boot( params, { name: "Mobile" } );
                        }
                    }
                }
            };
        }
    
        function returnMobileAppHeight() {
            var desktopElement = document.getElementById('navContainer');
            var mobileElement = document.getElementById('top-bar');
            var topHeight = 0;
            if (typeof (desktopElement) != 'undefined' && desktopElement != null) {
                topHeight = document.getElementById('navContainer').clientHeight;
            } else if (typeof (mobileElement) != 'undefined' && mobileElement != null) {
                topHeight = document.getElementById('top-bar').clientHeight;
            }
    
            var height = document.documentElement.clientHeight - topHeight;
            if (!height) //default height
                height = 500;
    
            return height + 'px';
        }
    
        //window.addEventListener('load', function () {
            var sIframe = document.getElementById('sport_div_iframe');
            var gh = document.getElementById('gameholder');
            var checkGh = gh !== null;
    
            var config = setLaunchConfig(checkGh);
    
                        config.desktop.initializeApplication(config.desktop.sp);
    
                var iframe = document.getElementById('iframe');
                if(iframe !== null) {
                    iframe.appendChild(sIframe);
                }
            
            if(checkGh) {
                                gh.setAttribute('style','overflow-y: scroll;');
                            gh.appendChild(sIframe);
            }
    
        //});
    
        window.addEventListener("message", receiveMessage, false);
    
        window.loginTrigger = function() {
            login();
        }
    
    </script>
    <!--p3915-->
    `);
  };
  

// Function to load an external script and return a Promise that resolves when the script is loaded
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = (error) => reject(new Error(`Script load error for ${src}: ${error.message}`));
    document.body.appendChild(script);
  });
};

const DynamicScriptComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    fetchContentFromAPI().then(htmlContent => {
      if (containerRef.current) {
        containerRef.current.innerHTML = htmlContent;

        const scripts = containerRef.current.querySelectorAll('script');
        const loadPromises = Array.from(scripts).map((originalScript) => {
          if (originalScript.src) {
            // Remove the original script element to prevent double execution
            originalScript.parentNode.removeChild(originalScript);
            // Return a promise that resolves when the external script is loaded
            return loadScript(originalScript.src);
          } else {
            // For inline scripts, return null (to be handled after external scripts are loaded)
            return Promise.resolve(null);
          }
        });

        // Wait for all external scripts to load before executing inline scripts
        Promise.all(loadPromises).then(() => {
          // Re-add and execute inline scripts
          Array.from(scripts).forEach((originalScript) => {
            if (!originalScript.src) {
              const script = document.createElement('script');
              script.textContent = originalScript.textContent;
              document.body.appendChild(script);
              // Inline script executed here
            }
          });
        }).catch(error => console.error('Failed to load external scripts:', error));
      }
    });
  }, []);

  return <div ref={containerRef}>Loading content...</div>;
};

export default DynamicScriptComponent;