'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">meditify documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e8d67e451513fb6688addd8d0657116f"' : 'data-target="#xs-components-links-module-AppModule-e8d67e451513fb6688addd8d0657116f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e8d67e451513fb6688addd8d0657116f"' :
                                            'id="xs-components-links-module-AppModule-e8d67e451513fb6688addd8d0657116f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonsSelectModule.html" data-type="entity-link" >ButtonsSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ButtonsSelectModule-de209a819b16cd7df9b724e265446b89"' : 'data-target="#xs-components-links-module-ButtonsSelectModule-de209a819b16cd7df9b724e265446b89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ButtonsSelectModule-de209a819b16cd7df9b724e265446b89"' :
                                            'id="xs-components-links-module-ButtonsSelectModule-de209a819b16cd7df9b724e265446b89"' }>
                                            <li class="link">
                                                <a href="components/ButtonsSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonsSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-bd1afc195077e764e59f367493086729"' : 'data-target="#xs-components-links-module-HomeModule-bd1afc195077e764e59f367493086729"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-bd1afc195077e764e59f367493086729"' :
                                            'id="xs-components-links-module-HomeModule-bd1afc195077e764e59f367493086729"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-bd1afc195077e764e59f367493086729"' : 'data-target="#xs-injectables-links-module-HomeModule-bd1afc195077e764e59f367493086729"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-bd1afc195077e764e59f367493086729"' :
                                        'id="xs-injectables-links-module-HomeModule-bd1afc195077e764e59f367493086729"' }>
                                        <li class="link">
                                            <a href="injectables/QuoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MeditationModule.html" data-type="entity-link" >MeditationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' : 'data-target="#xs-components-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' :
                                            'id="xs-components-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' }>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeditationHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeditationHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeditationItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeditationItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeditationModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeditationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeditationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeditationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' : 'data-target="#xs-injectables-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' :
                                        'id="xs-injectables-links-module-MeditationModule-b9368e6687a83418d0c218f21e58966d"' }>
                                        <li class="link">
                                            <a href="injectables/AudioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AudioStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioStateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MeditationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeditationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeditationRoutingModule.html" data-type="entity-link" >MeditationRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ButtonsSelectComponent.html" data-type="entity-link" >ButtonsSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoriesComponent.html" data-type="entity-link" >CategoriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryCardComponent.html" data-type="entity-link" >CategoryCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaContentComponent.html" data-type="entity-link" >MediaContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MeditationHeaderComponent.html" data-type="entity-link" >MeditationHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MeditationItemComponent.html" data-type="entity-link" >MeditationItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MeditationModalComponent.html" data-type="entity-link" >MeditationModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MeditationsComponent.html" data-type="entity-link" >MeditationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextContentComponent.html" data-type="entity-link" >TextContentComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AudioService.html" data-type="entity-link" >AudioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AudioStateService.html" data-type="entity-link" >AudioStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesLoadEffect.html" data-type="entity-link" >CategoriesLoadEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeditationsLoadEffect.html" data-type="entity-link" >MeditationsLoadEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeditationsService.html" data-type="entity-link" >MeditationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteLoadEffect.html" data-type="entity-link" >QuoteLoadEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteService.html" data-type="entity-link" >QuoteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CategoriesGuard.html" data-type="entity-link" >CategoriesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MeditationsGuard.html" data-type="entity-link" >MeditationsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HomeModuleState.html" data-type="entity-link" >HomeModuleState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HomeState.html" data-type="entity-link" >HomeState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MediaState.html" data-type="entity-link" >MediaState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meditation.html" data-type="entity-link" >Meditation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeditationModuleState.html" data-type="entity-link" >MeditationModuleState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeditationState.html" data-type="entity-link" >MeditationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});