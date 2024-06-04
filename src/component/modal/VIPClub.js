import React, { useState, useEffect } from 'react';
import { Modal, Button, Tabs, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const MyModal = ({ showModal, handleClose }) => {
	const [activeKey, setActive] = useState('bronze');
   
  
    return (
      <Modal show={showModal} onHide={handleClose}>
          <div className="ui-dialog v1nu7641">
	<button className="i1gm0mn8 dialog-close">
	
		<FontAwesomeIcon onClick={handleClose} icon={faXmark} />
	
	</button>
	<div className="ui-scrollview vipdialog-wrap">
		<div className="top-wrap"><div className="img-wrap">
			<img alt="ribbon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjcAAABNCAYAAABaDkUgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVqSURBVHgB7d3fcRvXHQXg34XIRI8sAZ4hJSTQTFiC1EFcQawKTFVgsgIpFdiuQEkFcgl8EBPYpGdQAh9tA+A1LvTHlLQiAewCxMLf9wIQfMTDntk9BzdFy/V6h93xZPR1dOIwAIClpRzDe53dk8HgdBgtthMtN74av4w0DTY5AIAayqV0cjV6PH35IlqsEy3W7R7uTb8Kd2wAoCHTgNM96PdbfW1tdbi5f/+XvQAAGpUnqdXX11aHGwCAjwk3AMBWEW4AgK0i3AAAW0W4AQC2inADAGwV4QYA2CrCDQCwVYQbAGCrCDcAwFYRbgCArbLT6x12xzHuRgtcDF7/EADA2pXDNNtw5lS6ly93ZsHmKr+KFjh40B/e6+w+GQxOhwEArFy5CTLJo1d5FN3ZmeEbLud41il3Q3JO/44WKMewj/NvLwIAWIvRZHw0DQzdaIEU8d3Fj2cvZp2bn89fH01fTqMFUk7/CABgLVInWnHdnQab6dOdyUl5/75QvNOZfDl9uQwAgJbJnfR0MBgMy/v34Wb2QYqTAABolXxyfXT0wRS8PKeKlP4TAAAtUB5HXfz0v+Prn33yOzfjX3eephTDAADYaOnyXmfy5ONPPwk3w+HpZU7paQAAbLKUT971bK6r/IXiNs3DAYA/n3ez76r/ffb4hTbNwwGAP4/rs+8qN54tZR4OAGya67PvKjeGG/NwAGCzfDj7rnLrqeDm4QDAJqiafVe5NdwU5uEAwN2qnn1XmSvcmIcDAHfqM7PvKnOFm8I8HAC4CzfNvqvMHW4K83AAYJ1um31XWSjcFObhAMC63Db7rrJwuDEPBwDW4/bZd5WFw01hHg4ArNK8s+8qS4WbwjwcAFiN+WffVZYON+bhAMAqpJyfLdqzuW7pcFOYhwMATSqz7/Pzs++ihlrhpjAPBwCasMzsu0rtcFOYhwMAte3Gl3UeR73TSLgxDwcA6skn52dnjTwJaiTcFObhAMAy6sy+qzQWbgrzcABgMfVm31UaDTfm4QDAIurOvqs0Gm4K83AAYB5NzL6rNB5uCvNwAOAmTc2+q6wk3HS7h3spxV4AAFTIUXLC/ViFlYSb3b+Mnucc3QAAqLY3zqNvYwUaDzcHDx99PU1jXwUAwE1yPN5/2H8eDWs03PR6h92c84sAAJhHjqP93qPH0aDGwk3p2Uzy6FUAACwgXeVvyw2SaEhj4UbPBgBYRp7eI2myf9NIuNGzAQBqKf2bB3//JhpQO9y86dnEcQAA1JKOm+jf1Ao3f/Rsst+0AQBqa6J/Uyvc7OyOvtGzAQCa0kT/ZulwU3o2keIoAACaVLN/s1S40bMBAFZr+f7NwuFGzwYAWIfSvym5Ixa0cLjRswEA1qH0b3b+OnoZC1oo3Bz0+l/p2QAAazM7f+pvC2WPucPNrGdzlRo/3AoA4Ea583yR/s3c4UbPBgC4K4v0b+YKN/sHfedGAQB3ZpH+za3hRs8GANgIc/Zvbgw3ejYAwEaZo39zY7jZ9J7NYDAYTl8uAwBoSLoc/7JzGhvstv7NZ8NNW3o2aTeepBTDAABqSpcp52fD4elG3zh407/57bPnT+1UfVh6NvmqHT2b87Ozki6/6PV63QAAlvb2iUg75PTP0r+5+PH/Lz7+1yfhpvRspo+jlj6s6q606gsBAOrLnecH/f4Pb290vPfJY6nSszH7BgBaYRQvP+7ffBBu9h88cm4UANAaVf2b9+Fm9ns2kY8DAKBN3vZv3v05CzelZzONPq3o2WTTbwBYn9yS6+6b/s1heTsLN+3q2eT/BgCwFqnTouvu2/5Nmj2Oastdm5y+v/jp9XEAAGuz/7B/NH3086+UNv8A7Zzz978DskMTODjle0wAAAAASUVORK5CYII=" className="ribbon-img dark-mode"/><span>VIP Club</span>
			<img alt="ribbon" src="data:image/png;base64,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" class="ribbon-img light-mode"></img>
		</div>
	</div>
	<div className="vip-dialog-main">
				<div className="top-desc">
					<span>Level up to get exclusive access to generous rewards and personalized gifts! Join our community of elite players and enjoy the best that online gaming has to offer.</span>
					<span className="view">View level up details</span>
				</div>
				<div className="card-host-wrap">
					<div className="c9lizje nostage">
						<div className="card-inner">
							<div className="left-img">
								<img className="level-img" src="/assets/nostage-70213504.png" alt=""/>
								<img className="img-light" src="/assets/light-11b6df26.svg"/>
								<div className="level">
									<div className="txt2">
										<span>vip</span>
										<span className="n">0</span>
									</div>
								</div>
							</div>
							<div className="right-process">
								<p className="p-t">Your VIP Progress</p>
								<div className="l-t">
									<span>0 XP</span>
									<div className="t13go5dd tips-wrap">
										<div className="in">
											<button>
												<svg className="s1ff97qc icon">
													
												</svg>
											</button>
										</div>
									</div>
								</div>
								<div className="process-wrap">
									<div className="process-bg">
										<div className="process-step" >
										</div>
									</div>
									<div className="level-xp">
										<div className="r-t">
											<span>1 XP</span>
											<span className="r-s">until</span>
											<span className="ttu">vip 1</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h1g8fg2o">
						<div className="l41xec6">
							<div className="lock-top-wrap">
								<div className="top-tit">VIP HOST</div>
								<div className="t13go5dd tips-wrap">
									<div className="in">
										<button>
											<svg className="s1ff97qc icon">
												
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="lock-img-wrap">
								<img className="img-locked" src="/assets/host-238c567a.png"/>
								<div className="locked-msg">Unlock your exclusive <b>VIP HOST</b> at <span>VIP 38</span></div>
							</div>
						</div>
					</div>
				</div>
				
				<Tab.Container id="left-tabs-example" defaultActiveKey="bronze" Key={activeKey} onSelect={(k) => setActive(k)}>
       <div  className="b17t3u0t">
        <p className="b-t">Discover the ultimate gaming experience with BC.GAME's exclusive VIP system!</p>
        <div className="b-list-wrap">

                        <Nav variant="tabs">
                        <div className="top-label-list">                   

                    <Nav.Item>
                        <Nav.Link eventKey="bronze">
                                <div className="bonus-label-item">
                        <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                        <p>Bronze</p>
                    </div>

                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="silver"> 
                            <div  className="bonus-label-item">
                        <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                        <p>Silver</p>
                    </div></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="gold"> <div eventKey="wihtdraw" className="bonus-label-item">
                        <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                        <p>Gold</p>
                    </div>
                </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="palatinum-i"> 
                            <div className="bonus-label-item">
                            <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                            <p>Platinum I</p>
                        </div></Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="palatinum-ii">
                            <div className="bonus-label-item">
                            <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                            <p>Platinum II</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="daimond-i">  
                         <div className="bonus-label-item">
                            <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                            <p>Diamond I</p>
                        </div></Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="daimond-ii"> 
                            <div className="bonus-label-item">
                            <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                            <p>Diamond II</p>
                        </div></Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="daimond-iii"> 
                        <div className="bonus-label-item">
                            <img alt="bonus" src="data:image/png;base64,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" className="level-img"/>
                            <p>Diamond III</p>
                        </div></Nav.Link>
                    </Nav.Item>
                     
                </div>
                </Nav>
   
          <Tab.Content>
      <Tab.Pane eventKey="bronze">
      <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: 'rgb(224, 154, 106)'}}>Bronze</div>
                        <p className="rec-desc">
                                <span>VIP 2-7</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;114.38 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/></div>
                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
      </Tab.Pane>
      <Tab.Pane eventKey="silver">
        <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
      </Tab.Pane>
      <Tab.Pane eventKey="gold">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
     
      </Tab.Pane>
      <Tab.Pane eventKey="palatinum-i">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
      </Tab.Pane>
	  <Tab.Pane eventKey="palatinum-ii">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
      </Tab.Pane>
	  <Tab.Pane eventKey="daimond-i">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
      </Tab.Pane>
	  <Tab.Pane eventKey="daimond-ii">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
      </Tab.Pane>
	  <Tab.Pane eventKey="daimond-iii">
	  <div className="bonus-area-wrap">
                        <div className="level-name-range">
                        <div className="rec-wrap" style={{ backgroundColor: ' rgb(225, 225, 225)'}}>Silver</div>
                        <p className="rec-desc">
                                <span>VIP 8-21* Benefits from previous levels are all included</span>
                            </p>
                        </div>
                        <div className="list-w">
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Level Up Bonus</p>
                                        </div>
                                        <div className="desc sp">
                                            <span>Total prize:<span className="y f"><div className="cq8kbks coin notranslate"><div className="amount amount-str">BDT&nbsp;18.90 BCD</div></div></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-item-wrap">
                                <div className="left-img">
                                    <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                </div>
                                    <div className="right-wrap">
                                        <div className="tit-wrap">
                                            <p className="tit">Raining</p>
                                        </div>
                                        <p className="desc">Rain algorithm rewards for highly active players in chat.</p>
                                    </div>
                                </div>
                                <div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									<div className="benefits-item-wrap">
                                    <div className="left-img">
                                        <img alt="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAACXBIWXMAABmHAAAZhwF8o32qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATOSURBVHgB7d1dTltHGAbg7xuDVOXK3cHZQegKYq8AzmVLo+KLlCIuUlYArIDmokJpLkyU0F4eZwWFFZQd9CzBF00rOZz5OjMuzY8Y25hjZX7eR4qEOA5g+T3zP2eIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILFlJlhVXWbf6gnpB5pkcJ8a+PD6yxUs+IrJn35julq7+uypgxkE4QXr6oeddSmbmTHvOvuov+Pmc5Yy8snj8sLSljyQTj9rSqU5hMS2qL7YBppJQeplhBJB+H5r9UWNTy8Swkwnxzsflv+RIlRlKgX528OSXPVbggsPnE/OzFJlgj2gzINwSNaIcV89GR785gSkVwQXHVgS4JFCY1NuTh2X2tTetypBEmnmkgqCK5h2PDv5stizktrU2K8pGs62xt83Pj7+bzaMPXlhhI+XODnjJml//12eUWRW6OEdDQfyqwPz979LMez7uL96Ydq/52dnlc7cwLRJTE9EqI+RS6ZEuG/0uDPGS+pr1nK/TvevYuUMqZ06e9FPs6QTK/Blgazri8TAsuOG+iO9F1p4vvdzNH3IpIJgmj/gJG5Y4/371GPTweRZOC7bqqjnh26poglEQQ3fOxv7dem2D6ie9p9XI5MPXrhuz55SzsUsSSC0NCs4WN5Rm39HjY9DQ8mfkgRSyIIZnDH+yGYSaMLaskXExr5rtnqgSKWShvBWz+32ccfDErT/aSa7vg3xCCJIMiM9gG1zK5X8FxCECB+CAI4CAI4CAI4CAI4CAI4Uc8+uvH9MXUna/yHZ4i5VuKfI1iGMJ/IJ0vgbzDLV+sPqB6U5ZgiE10Q7LTwmqinZiJpywznFRSm2o5oNkqOY1n1HE0Q7N0/eavMdK/8SBGx+yJiCEQUQbClQKfhylckR8CtaQg5DFE0FiMPgeVWOYW8ZiH4INil6ZGH4EYx+ZuHFKigq4YF1iFGJ9T1jWGXCDruOf7bdNQ992CuSNBB6Ah/R4kR4U0KUNBBEEmibfCpIsRGY9hVA8e92MNrHN77wlwDOAgCOAgCOEltgl0K08i0Si8101iJ7a7yI6JgJ7NWJucg3Db+f5bAvMZScq0avJNA9nvr76TP063x2cgyCMyzp4XtRpZG5IAykmUQ1h/4t67dcPMBM7bCpybLICy8lEwhCEkbDqtioRfqREc2b5FlECZr859lMOeZC8nJs9fA/NR2E32X7TXN4S4iWYVcu49dM1bgfe6RunYlRkEZwRAzOAgCOAgCOAgCONkGQZN86bsmkT8GZxnZBoHNdLNv7SBzmAtMVynnqqFrN5x8OJ5gg/H89Rv7kO2CMpP3whShLXXNvV9ej9yU8+Qv2iCW7KoFCyuUzDDy/w/LzO7ww/fQawAHQQAHQQAn9J1ONSVoMAjvgRlBByHRBaRBvqewN8Fq//kIsWJu7/yINgUdBHtqClFC1YPQuFHtnR/RpvAbiwktKzfzG89CfaBW8EGwpYI9nIsiJ6ZKaONsqVWJZizt9FV1pCI9Vs+G4IftMujnQ0Y1qGrC0FPTRaUFxaEmJQe735RzN9R8blGOrttAuIdSCT8UDisUPD12+LLRNIr9dFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQPwLSHCYE8nYfukAAAAASUVORK5CYII="/>
                                    </div>

                                        <div className="right-wrap">
                                            <div className="tit-wrap">
                                                <p className="tit">Coin Drops</p>
                                            </div>
                                            <p className="desc">Create a coin drop for friends in the chat.</p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
      </Tab.Pane>
    </Tab.Content>
</div>
</div>
   
  </Tab.Container>




                 
					<button className="ui-button button-normal vip-btn">
						<div className="button-inner">Learn more about BC.GAME’s VIP system</div>
					</button>
				</div>
			</div>
		</div>
      </Modal>
    );
  };
function VIPClub() {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    useEffect(() => {
        // Check if a token exists in localStorage when the component mounts
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
      }, []);

    const handleShow = () => setShowModal(true);
	const handleClose = () => {
		console.log('handleClose called');
		setShowModal(false);
	  };
	  
  
    return (
      <div>
       <li onClick={handleShow} className='nav-item'>
            <span className='nav-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path fillRule={"evenodd"} clipPath={"evenodd"} d="M8.40788 2.46722L6.86866 4.77669L7.49772 5.41048L8.12677 6.04423L7.88071 6.77494C7.53757 7.7938 7.40721 8.00778 7.00435 8.21332C6.50276 8.4692 5.47608 8.34999 5.01513 7.98236C4.79164 7.80408 4.60049 7.49501 4.51898 7.18007C4.40966 6.75761 4.44905 6.51554 4.72128 5.93683C4.82019 5.72652 4.89326 5.54663 4.88367 5.53705C4.85062 5.504 0.0285673 3.79214 0.000366788 3.80344C-0.0152002 3.8097 0.466712 5.72871 1.07132 8.0679L2.17056 12.321L4.77134 12.3214L7.37216 12.3219L8.67287 11.0216L9.97361 9.72129L11.2746 11.0219L12.5756 12.3224L15.1749 12.3124L17.7741 12.3023L18.8705 8.07811C19.4736 5.75479 19.9813 3.8318 19.9988 3.80477C20.0163 3.77775 19.8403 3.82343 19.6077 3.90635C19.3751 3.98923 18.2519 4.38846 17.1117 4.79351C15.9716 5.19857 15.0333 5.53381 15.0266 5.53854C15.0199 5.54323 15.1013 5.72057 15.2076 5.93256C15.5333 6.58204 15.5584 6.96984 15.307 7.47225C15.141 7.80401 14.9065 8.02284 14.518 8.20836C14.2234 8.34901 14.2079 8.3519 13.748 8.3519C13.3134 8.3519 13.2606 8.34357 13.0348 8.23926C12.7777 8.12051 12.499 7.86013 12.3771 7.62467C12.3391 7.55137 12.1983 7.1658 12.0642 6.76782L11.8205 6.04423L12.4495 5.41048L13.0786 4.77669L11.5394 2.46722C10.6928 1.19699 9.9882 0.157715 9.97361 0.157715C9.95903 0.157715 9.25444 1.19699 8.40788 2.46722ZM9.21079 12.1655L8.46827 12.9088L9.22096 13.6615L9.97361 14.4142L10.7263 13.6615L11.479 12.9088L10.7364 12.1655C10.3281 11.7567 9.9848 11.4223 9.97361 11.4223C9.96243 11.4223 9.61917 11.7567 9.21079 12.1655ZM2.34656 14.6687V15.8421H6.03274H9.71887L8.54599 14.6687L7.3731 13.4953H4.85981H2.34656V14.6687ZM11.4012 14.6687L10.2284 15.8421H13.9145H17.6007V14.6687V13.4953H15.0874H12.5741L11.4012 14.6687Z" fill="#98A7B5"/>
          </svg>
            </span>
            <a className='nav-link'>
            VIP CLUB
            </a>
          </li>
        
        <MyModal showModal={showModal} handleClose={handleClose} />

      </div>
    );
  };

export default VIPClub;