<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="header-inner">
          <div class="left-header"></div>
          <div class="logo">
            <NuxtLink to="/">
              <img src="../public/protect_logo.svg" alt="" srcset="" />
            </NuxtLink>
          </div>
          <div id="spacer"></div>
          <div class="right-header">
            <nav class="d-none d-lg-block navigation">
              <ul>
                <li>
                  <!-- Don't use <NuxtLink/> here, we want full page refresh benefits from htmml anchor tag,
                   otherwise the new query won't fire for updated content-->
                  <NuxtLink
                    :to="{
                      name: 'articles-vertical-subvertical-insurance',
                      params: {
                        vertical: 'insurance',
                        subvertical: 'auto',
                      },
                    }"
                    >Auto Insurance</NuxtLink
                  >
                </li>
                <li>
                  <!-- Don't use <NuxtLink/> here, we want full page refresh benefits from htmml anchor tag,
                   otherwise the new query won't fire for updated content-->
                  <NuxtLink
                    :to="{
                      name: 'articles-vertical-subvertical-insurance',
                      params: {
                        vertical: 'insurance',
                        subvertical: 'health',
                      },
                    }"
                    >Health Insurance</NuxtLink
                  >
                </li>
                <li>
                  <!-- Don't use <NuxtLink/> here, we want full page refresh benefits from htmml anchor tag,
                   otherwise the new query won't fire for updated content-->
                  <NuxtLink
                    :to="{
                      name: 'articles-vertical-subvertical-insurance',
                      params: {
                        vertical: 'insurance',
                        subvertical: 'home',
                      },
                    }"
                    >Home Insurance</NuxtLink
                  >
                </li>
              </ul>
            </nav>
            <div class="d-none d-lg-none">
              <svg
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
                  ></path>
                  <path
                    d="M528.647,183.715a3.647,3.647,0,0,0-4.861-.016,4.316,4.316,0,0,0-.78,3.407c.237,
            2.428,1.491,4,3.195,4s2.923-1.53,3.195-3.991A4.25,4.25,0,0,0,528.647,183.715Zm-.2,3.293c-.214,
            1.941-1.077,3.146-2.251,3.146s-2.064-1.233-2.25-3.14a3.456,3.456,0,0,1,.537-2.678,2.732,2.732,
            0,0,1,3.453.012A3.4,3.4,0,0,1,528.451,187.008Z"
                    fill="#66c296"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
