import React, { useEffect, useRef } from 'react';

// Mock function to simulate fetching data from an API
const fetchContentFromAPI = () => {
  return Promise.resolve(`
    <script type="text/javascript" src="https://sport.seriea.fun/js/Partner/IntegrationLoader.js"></script>
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
              ['token', '1243995-123897-eca9dcfff9e297bb5ec05a8bbb8dbc10'],
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
              token: '1243995-123897-eca9dcfff9e297bb5ec05a8bbb8dbc10',
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
      window.addEventListener("message", receiveMessage, false);
      window.loginTrigger = function() {
        login();
      }
    </script>
  `);
};

const DynamicScriptComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let addedScripts = []; // Track scripts for cleanup

    fetchContentFromAPI().then(htmlContent => {
      if (containerRef.current) {
        containerRef.current.innerHTML = htmlContent;

        // Execute scripts found in the fetched HTML
        const scripts = containerRef.current.querySelectorAll('script');
        scripts.forEach((originalScript) => {
          const script = document.createElement('script');
          if (originalScript.src) {
            script.src = originalScript.src;
            // Handle load/error events for external scripts if needed
          } else {
            script.textContent = originalScript.textContent;
          }
          document.body.appendChild(script);
          addedScripts.push(script); // Track added script for cleanup
          originalScript.parentNode.removeChild(originalScript);
        });
      }
    });

    // Cleanup function to remove added scripts
    return () => {
      addedScripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return <div ref={containerRef}>Loading...</div>;
};

export default DynamicScriptComponent;
