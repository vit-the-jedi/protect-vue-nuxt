<template>
  <header class="header" :class="{ drawerActive: menuIsVisible }">
    <div class="container">
      <div class="row">
        <div class="header-inner">
          <div class="left-header">
            <!-- @click="showNavMenuMobile = !showNavMenuMobile" -->
            <div
              id="menu-button"
              class="d-block d-lg-none"
              v-if="!showNavSearchHeaderMobile"
            >
              <svg
                v-if="!showNavMenuMobile"
                @click="toggleMobileMenu"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="15"
                viewBox="0 0 30 15"
              >
                <g transform="translate(-49.744 -579)">
                  <rect
                    width="26.923"
                    height="1.5"
                    rx="0.75"
                    transform="translate(52.821 579)"
                    fill="#0c2c67"
                  />
                  <rect
                    width="30"
                    height="1.5"
                    rx="0.75"
                    transform="translate(49.744 585.75)"
                    fill="#0c2c67"
                  />
                  <rect
                    width="19.231"
                    height="1.5"
                    rx="0.75"
                    transform="translate(60.513 592.5)"
                    fill="#0c2c67"
                  />
                </g>
              </svg>
              <svg
                v-else-if="showNavSearchHeaderMobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35.65 35.65"
                class="close-icon"
                @click="toggleSearch"
              >
                <g>
                  <g id="icons">
                    <polygon
                      class="cls-1"
                      points="35.65 2.53 33.12 0 17.82 15.29 2.53 0 0 2.53 15.29 17.82 0
                      33.12 2.53 35.65 17.82 20.35 33.12 35.65 35.65 33.12 20.35 17.82 35.65 2.53"
                    />
                  </g>
                </g>
              </svg>
              <svg
                v-else
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-x"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8
                7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647
                2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <svg
              v-if="showNavSearchHeaderMobile"
              @click="toggleSearch"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8
              7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647
              2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <div
              v-if="showNavMenuMobile || showNavSearchHeaderMobile"
              id="logo-mobile-menu-open"
            >
              <a @click="go('/')">
                <component v-if="iconComponentName" :is="iconComponentName" />
              </a>
            </div>
          </div>
          <div class="logo">
            <router-link to="/">
              <img
                v-if="!showNavMenuMobile && !showNavSearchHeaderMobile"
                alt="Protect logo"
                src="../assets/protect_logo_tm.svg"
              />
            </router-link>
          </div>
          <div id="spacer"></div>
          <!-- This is just temp -->
          <div class="right-header">
            <nav
              class="d-none d-lg-block navigation"
              v-bind:class="{ 'show-mobs': showNavMenuMobile }"
            >
              <ul>
                <li v-for="link in navigation.links" v-bind:key="link.label">
                  <!-- to re-enable large nav menu on hover, add @mouseenter="mouseOverMenu" back to the a tag below-->
                  <router-link
                    :to="link.to"
                    v-if="navigation.desktopOnly.includes(link.label)"
                  >
                    {{ link.label }}
                  </router-link>
                </li>
              </ul>
            </nav>
            <!-- <img
              v-if="!showNavMenuMobile && !showNavSearchHeaderMobile"
              class="icon show-search"
              alt="Search"
              src="../assets/gray-search.svg"
              @mouseenter="mouseOverMenu"
              @click="toggleSearch"> -->
            <!--
              <b-buttons class="d-none d-lg-block login " :config="{size: 'md', variant: 'outline-primary', label:'Join or Login'}"></b-buttons>
            -->
            <div class="d-none d-lg-none">
              <span v-if="showNavMenuMobile || showNavSearchHeaderMobile">
                <a @click="go('/join/')" class="mobile-menu-open-button"
                  ><button>Join</button></a
                >
                <a @click="go('/login/')" class="mobile-menu-open-button"
                  ><button>Login</button></a
                >
              </span>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 19 19"
              >
                <g transform="translate(-516.724 -178.989)">
                  <path
                    d="M532.945,181.773a9.513,9.513,0,1,0,2.779,6.719A9.439,9.439,0,0,0,532.945,181.773Zm-6.719,
                  15.222a8.448,8.448,0,0,1-6.015-2.488c-.1-.1-.2-.218-.3-.328a1.442,1.442,0,0,1,
                  .882-1.082l3.315-1.308-.348-.882-3.315,1.308a2.386,2.386,0,0,0-1.228,1.1,8.505,8.505,0,1,1,14,
                  .013,2.392,2.392,0,0,0-1.234-1.109l-3.315-1.307-.348.882,3.314,1.308a1.442,1.442,0,0,1,.886,
                  1.1c-.094.1-.182.212-.282.312A8.45,8.45,0,0,1,526.226,196.995Z"
                    fill="#66c296"
                  />
                  <path
                    d="M528.647,183.715a3.647,3.647,0,0,0-4.861-.016,4.316,4.316,0,0,0-.78,3.407c.237,
                  2.428,1.491,4,3.195,4s2.923-1.53,3.195-3.991A4.25,4.25,0,0,0,528.647,183.715Zm-.2,3.293c-.214,
                  1.941-1.077,3.146-2.251,3.146s-2.064-1.233-2.25-3.14a3.456,3.456,0,0,1,.537-2.678,2.732,2.732,
                  0,0,1,3.453.012A3.4,3.4,0,0,1,528.451,187.008Z"
                    fill="#66c296"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <transition name="fade">
      <NavMenu
        v-if="showNavMenu"
        :closeMenu="mouseLeaveMenu" :go="go"
        :toggleSearch="toggleSearch"
        :showSearch="showSearch"
        :showNavInner="showNavInner"
        :links="navigation.links"
      />
    </transition> -->
    <aside class="drawer-nav">
      <nav>
        <div class="mobile-drawer-header">
          <svg
            @click="toggleMobileMenu"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8
            7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647
            2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <div>
            <div @click="goHome">
              <component v-if="iconComponentName" :is="iconComponentName" />
            </div>
          </div>
        </div>
        <!-- <div @click="showResultsContainer">
          <SearchOverlay v-if="menuIsVisible" id="searchOverLayMobile" />
        </div> -->
        <div
          v-for="(item, index) in menu.children"
          :key="item.title"
          class="item"
          :item="item"
        >
          <button
            @click="
              toggleMobileMenuSecondary(
                item.children ? `mms${index}` : item.link
              )
            "
            class="next-level"
          >
            <span class="title">{{ item.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.74 18.32"
              class="right-arrow"
              v-if="item.children"
            >
              <g>
                <path
                  d="M.68.62A2.16,2.16,0,0,0,.61,3.7c.67.74,1.36,
                1.48,2,2.2S4.2,7.57,5,8.42l.65.72,0,0-.25.3L5,9.9l-1.3,1.4c-1,
                1.08-2,2.2-3.06,3.32A2.16,2.16,0,0,0,.68,17.7a2.16,2.16,0,0,0,
                3.12-.09C6.06,15.2,8.13,13,10.12,10.76a2.56,2.56,0,0,0,.58-1.23,
                3,3,0,0,0,0-.41,1.8,1.8,0,0,0-.15-.73,2.4,2.4,0,0,0-.47-.83C8.13,
                5.36,6.06,3.12,3.8.71A2.16,2.16,0,0,0,.68.62Z"
                />
              </g>
            </svg>
          </button>
          <!-- <MobileMenuDrawer
            v-if="menuIsVisible"
            :item="item"
            :title="item.title"
            :id="`mms${index}`"
            :ref="`mms${index}`"
            :toggleMobileMenuSecondary="toggleMobileMenuSecondary">
          </MobileMenuDrawer> -->
        </div>
      </nav>
    </aside>
  </header>
</template>

<script>
import iconMixin from "../mixins/iconMixin";

const availableElements = {
  BIcon,
  Inputs,
};
export default {
  name: "Header",
  props: ["header"],
  mixins: [iconMixin],
  components: {
    ...availableElements,
  },
  data() {
    return {
      showNavMenu: false,
      showNavMenuMobile: false,
      showNavInner: true,
      showSearch: false,
      showNavSearchHeaderMobile: false,
      menuIsVisible: false,
      menuSecondaryIsVisible: false,
      search: "",
      icon: "protect-shield",
      menu: {
        // provide a key of children inside route object for sub menus
        children: [
          {
            title: "Car Insurance",
            link: "/car-insurance",
          },
          {
            title: "Home Insurance",
            link: "/home-insurance",
          },
          {
            title: "Health Insurance",
            link: "/health-insurance",
          },
          {
            title: "Rate Calculator",
            link: "/car-insurance/calculator",
          },
          {
            title: "Latest Articles",
            link: "/articles",
          },
        ],
      },
      navigation: {
        desktopOnly: [
          "Car Insurance",
          "Health Insurance",
          "Home Insurance",
          "Articles",
          "Rate Calculator",
        ],
        links: [
          {
            to: "/car-insurance",
            label: "Car Insurance",
            open: false,
          },
          {
            to: "/health-insurance",
            label: "Health Insurance",
          },
          {
            to: "/home-insurance",
            label: "Home Insurance",
          },
          {
            to: "/car-insurance/calculator",
            label: "Rate Calculator",
            open: false,
          },
          {
            to: "/articles/",
            label: "Articles",
            open: false,
          },
        ],
      },
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 992;

      if (this.isMobile) {
        this.showNavMenu = false;
      } else {
        this.showNavMenuMobile = false;
      }
    },
    mouseOverMenu() {
      if (!this.isMobile) {
        this.showNavMenu = true;
      }
    },
    mouseLeaveMenu() {
      this.showNavMenu = false;
    },
    toggleMenu() {
      this.showNavMenuMobile = !this.showNavMenuMobile;
    },
    searchie() {
      console.log("search for this", this.search);
    },
    showResultsContainer() {
      const searchResult = document.querySelector(
        "div#searchOverLayMobile .results"
      );
      if (searchResult) {
        searchResult.classList.remove("hidden");
      }
      const searchResultContainer = document.querySelector(
        "div#searchOverLayMobile .container.search-container"
      );
      searchResultContainer.classList.remove("collapsed");
    },
    toggleSearch() {
      // this.showNavMenu = false;
      this.showSearch = !this.showSearch;
      this.showNavInner = !this.showNavInner;

      if (this.isMobile === true) {
        this.toggleMobileMenu();
      }

      // preventing scrolling when search is open because there is an overlay
      // if (this.showSearch === true) {
      //   document.documentElement.style.overflow = 'hidden';
      // } else {
      //   document.documentElement.style.overflow = 'scroll';
      // }
    },
    go(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
      this.showNavMenu = false;
      this.showNavMenuMobile = false;
      this.showSearch = false;
    },
    toggleMobileMenu() {
      this.menuIsVisible = !this.menuIsVisible;
    },
    toggleMobileMenuSecondary(index) {
      const element = document.getElementById(index);

      if (index.includes("mm")) {
        element.classList.add("openUp");

        const searchResult = document.querySelector(
          "div#searchOverLayMobile .results"
        );
        if (searchResult) {
          searchResult.classList.add("hidden");
        }
        const searchResultContainer = document.querySelector(
          "div#searchOverLayMobile .container.search-container"
        );
        if (searchResultContainer) {
          searchResultContainer.classList.add("collapsed");
        }
      } else {
        // go to link
        this.go(index);

        // close mobile menu
        this.toggleMobileMenu();
      }
    },
    goHome() {
      this.toggleMobileMenu();
      this.go("/");
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
  transform: translateX(100deg) 1s ease-in;
}
.rotate-point-up {
  transform: rotate(180deg);
}
.rotate-point-right {
  transform: rotate(-90deg);
}
#nav-mobile-login-button button {
  border: 2px solid $green;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;
  font-size: 14px;
}
#nav-mobile-search {
  width: 90%;
  margin: 20px auto;
  .input-group {
    height: 50px;
    input {
      height: 50px;
      font-size: 12px;
    }
    .input-group-text.indicator {
      cursor: pointer;
      .elixr-icon {
        width: 20px;
        max-height: 25px;
      }
    }
  }
}

svg.elixr-icon.protect-shield {
  padding-top: 5px;
  width: 20px;
  max-height: 25px;
}
#logo-mobile-menu-open {
  border: none;
  background: none;
}
#menu-button {
  cursor: pointer;
  border: none;
  background: none;
  margin-left: 10px;
}
#sidebar-no-header {
  top: 72px;
  width: 500px;
}
.nav-link-sub,
.nav-link-main {
  font-family: "Nunito Sans", sans-serif;
  height: 40px;
  cursor: pointer;
  border-right: none;
  border-left: none;
}
.mobile-nav {
  .list-group {
    border-radius: 0;

    .list-group-item {
      border-right: 0;
    }
  }
  .list-group:not(:last-child) .nav-link-main {
    border-bottom: unset;
  }
}
.mobile-menu-open-button button {
  border: none;
  background: none;
  color: #66c296;
}
.collapse {
  border-top: 1px solid rgba($black, 0.1);
}
.nav-link-main {
  color: #0c2c67;
  font-weight: bold;
}
.nav-link-sub {
  background: #f4f8f8 !important;
}
.elixr-icon {
  // height: 100%;
  width: 10px;
  max-height: 60%;
}
.header {
  margin: 10px auto 0px;
  background-color: $white;
  z-index: 999;
  // box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.05);
  border-bottom: 1px solid #f1f1f1;

  a {
    cursor: pointer;
    color: #0c2c67;

    &:hover {
      color: #040f22;
      text-decoration: underline;
    }
  }

  .container {
    margin: auto;

    @include media-breakpoint-down(lg) {
      max-width: 100%;
    }
  }
}

.header-inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px auto;
  padding: 0 15px 10px 15px;

  @include media-breakpoint-between(lg, xxl) {
    margin: auto;
  }

  @include media-breakpoint-down(md) {
    height: 32px;
    padding: 0;
  }
  .logo {
    display: flex;
    align-items: center;
    //margin-left: 10px;
    margin-right: 15px;
    a {
      width: 115px;

      img {
        max-width: 115px;
      }
    }
    @include media-breakpoint-between(lg, xxl) {
      a {
        width: 174px;

        img {
          max-width: 174px;
        }
      }
    }
  }
  #spacer {
    flex-grow: 1;
  }
  .left-header {
    align-items: left;
    justify-content: flex-start;
    display: none;

    @include media-breakpoint-down(md) {
      display: flex;
    }
  }
  .right-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include media-breakpoint-up(lg) {
      min-width: 785px;
    }

    @include media-breakpoint-down(md) {
      min-width: 40px;
    }

    .navigation {
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        margin: 0;

        li {
          padding: 1em;

          a {
            color: $gray-dark;
            font-weight: 500;
            font-size: 1rem;

            &:hover {
              color: $blue !important;
              text-decoration: none;
            }
          }
        }
      }
    }

    .icon {
      width: 100%;
      max-width: 23px;
      margin: 0 1em 0 0;
      cursor: pointer;
    }

    .login {
      margin-left: 1.5em;

      button {
        font-weight: 600;
        font-size: 0.875em;
      }
    }
  }
}

.show-mobs {
  display: block;
  @include media-breakpoint-between(lg, xxl) {
    display: none;
  }
}
#spacer {
  display: none;
  @include media-breakpoint-between(lg, xxl) {
    display: block;
  }
}

aside.drawer-nav {
  transition: 0.6s all;
  max-width: 768px;
  background: #fff;
  position: fixed;
  height: 100vh;
  transform: translateX(-100%);
  overflow: hidden;
  overflow-y: auto;
  z-index: -9999;
  width: 100%;
  top: 0;
  left: 0;

  .mobile-drawer-header {
    display: flex;
    padding: 1em;

    svg {
      margin-right: 0.5em;
      cursor: pointer;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-hamburger {
    cursor: pointer;
  }

  .item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    font-weight: 600;
    height: 46px;
    overflow-x: hidden;

    &:last-child {
      border-bottom: 1px solid #efefef;
    }

    .next-level {
      background-color: $white;
      outline: none;
      border: 0;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6em 1em;

      .right-arrow {
        width: 8px;
        fill: $blue;
      }
    }
  }
}

.drawerActive {
  .drawer-nav {
    transform: translateX(0);
    z-index: 9999;
    box-shadow: $box-shadow;
  }
}
#searchOverLayMobile {
  .search-box {
    padding-bottom: 1em;
    .search-container .search-input-container {
      padding-bottom: 0;
      border: none;
      .input-and-button .inputs-wrapper .input-group {
        height: 50px;
        input {
          height: 100%;
          padding: 0 10px;
        }
        .input-group-append {
          height: 50px;
          .input-group-text.indicator svg {
            height: 25px;
          }
        }
      }
    }
  }
}
div#searchOverLayMobile {
  .container.search-container.collapsed {
    height: 50px;
  }
  .results.hidden {
    visibility: hidden;
    height: 0;
  }
}

header {
  position: sticky;
  top: 0;
}
</style>
