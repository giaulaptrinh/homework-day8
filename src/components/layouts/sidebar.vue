<template>
    <!-- Desktop Sidebar -->
    <nav class="side-nav hidden w-[80px] overflow-x-hidden pb-16 pr-5 md:block xl:w-[230px]">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center pt-4 pl-5 intro-x">
            <img alt="Midone - Tailwind Admin Dashboard Template" class="w-6" 
                 src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='311.899'%20height='291.707'%20viewBox='0%200%20311.899%20291.707'%3e%3cg%20id='Icon_ionic-ios-apps'%20data-name='Icon%20ionic-ios-apps'%20transform='translate(-4.57%20-4.492)'%3e%3cpath%20id='Path_9'%20data-name='Path%209'%20d='M305.678,64.318,184.327,9a65.721,65.721,0,0,0-47.842,0L15.22,64.318c-14.293,6.5-14.293,17.117,0,23.639l120.221,54.826a69.059,69.059,0,0,0,50.033,0L305.687,87.956C319.971,81.46,319.971,70.822,305.678,64.318Z'%20transform='translate(0.07)'%20fill='%23fff'%20opacity='0.999'/%3e%3cg%20id='Group_1'%20data-name='Group%201'%20transform='translate(4.533%20135.941)'%3e%3cpath%20id='Path_10'%20data-name='Path%2010'%20d='M108.2,53.266,44,24a10.438,10.438,0,0,0-8.553,0L12.99,34.227c-11.32,5.145-11.32,13.556,0,18.721l95.21,43.42a54.692,54.692,0,0,0,39.625,0l95.2-43.42c11.32-5.148,11.32-13.556,0-18.721L220.582,24a10.438,10.438,0,0,0-8.553,0l-64.2,29.268a54.692,54.692,0,0,1-39.625,0Z'%20transform='translate(28.02%2060.176)'%20fill='%23fff'%20opacity='0.5'/%3e%3cpath%20id='Path_11'%20data-name='Path%2011'%20d='M274.692,27.406l-23.1-10.493a11.652,11.652,0,0,0-9.618,0l-78.68,35.625a64.317,64.317,0,0,1-37.812,0L46.815,16.914a11.652,11.652,0,0,0-9.618,0L14.108,27.407c-12.819,5.825-12.819,15.351,0,21.2L121.925,97.783a61.937,61.937,0,0,0,44.874,0L274.615,48.608C287.51,42.773,287.51,33.232,274.692,27.406Z'%20transform='translate(11.592%20-15.875)'%20fill='%23fff'%20opacity='0.75'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e">
            <span class="hidden ml-3 text-lg text-white xl:block">Rubick</span>
        </RouterLink>

        <!-- Divider -->
        <div class="my-6 side-nav__divider"></div>

        <!-- Menu Items -->
        <ul>
            <!-- Dashboard -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('dashboard')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home-icon stroke-1.5 w-5 h-5">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Dashboard 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.dashboard }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- E-Commerce -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('ecommerce')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon stroke-1.5 w-5 h-5">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                            <path d="M3 6h18"></path>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        E-Commerce 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.ecommerce }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Inbox -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/inbox">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox-icon stroke-1.5 w-5 h-5">
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">Inbox</div>
                </RouterLink>
            </li>

            <!-- File Manager -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/file-manager">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive-icon stroke-1.5 w-5 h-5">
                            <line x1="22" x2="2" y1="12" y2="12"></line>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            <line x1="6" x2="6.01" y1="16" y2="16"></line>
                            <line x1="10" x2="10.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                    <div class="side-menu__title">File Manager</div>
                </RouterLink>
            </li>

            <!-- Point of Sale -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/point-of-sale">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon stroke-1.5 w-5 h-5">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                    </div>
                    <div class="side-menu__title">Point of Sale</div>
                </RouterLink>
            </li>

            <!-- Chat -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/chat">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-icon stroke-1.5 w-5 h-5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">Chat</div>
                </RouterLink>
            </li>

            <!-- Post -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/post">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon stroke-1.5 w-5 h-5">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" x2="8" y1="13" y2="13"></line>
                            <line x1="16" x2="8" y1="17" y2="17"></line>
                            <line x1="10" x2="8" y1="9" y2="9"></line>
                        </svg>
                    </div>
                    <div class="side-menu__title">Post</div>
                </RouterLink>
            </li>

            <!-- Calendar -->
            <li>
                <RouterLink class="cursor-pointer side-menu" to="/calendar">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon stroke-1.5 w-5 h-5">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                    </div>
                    <div class="side-menu__title">Calendar</div>
                </RouterLink>
            </li>

            <!-- Divider -->
            <li class="my-6 side-nav__divider"></li>

            <!-- Crud -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('crud')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-square-icon stroke-1.5 w-5 h-5">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Crud 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.crud }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Users -->
            <li>
                <a class="cursor-pointer side-menu side-menu--active" href="#" @click="toggleSubmenu('users')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon stroke-1.5 w-5 h-5">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Users 
                        <div class="side-menu__sub-icon transform rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
                <ul class="side-menu__sub-open">
                    <li>
                        <RouterLink class="cursor-pointer side-menu side-menu--active" to="/users-layout-1">
                            <div class="side-menu__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity-icon stroke-1.5 w-5 h-5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="side-menu__title">Layout 1</div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="cursor-pointer side-menu" to="/users-layout-2">
                            <div class="side-menu__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity-icon stroke-1.5 w-5 h-5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="side-menu__title">Layout 2</div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="cursor-pointer side-menu" to="/users-layout-3">
                            <div class="side-menu__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity-icon stroke-1.5 w-5 h-5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="side-menu__title">Layout 3</div>
                        </RouterLink>
                    </li>
                </ul>
            </li>

            <!-- Profile -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('profile')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trello-icon stroke-1.5 w-5 h-5">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <rect width="3" height="9" x="7" y="7"></rect>
                            <rect width="3" height="5" x="14" y="7"></rect>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Profile 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.profile }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Pages -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('pages')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left-icon stroke-1.5 w-5 h-5">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <path d="M3 9h18"></path>
                            <path d="M9 21V9"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Pages 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.pages }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Divider -->
            <li class="my-6 side-nav__divider"></li>

            <!-- Components -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('components')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox-icon stroke-1.5 w-5 h-5">
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Components 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.components }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Forms -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('forms')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-icon stroke-1.5 w-5 h-5">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <path d="M9 3v18"></path>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Forms 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.forms }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>

            <!-- Widgets -->
            <li>
                <a class="cursor-pointer side-menu" href="#" @click="toggleSubmenu('widgets')">
                    <div class="side-menu__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive-icon stroke-1.5 w-5 h-5">
                            <line x1="22" x2="2" y1="12" y2="12"></line>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            <line x1="6" x2="6.01" y1="16" y2="16"></line>
                            <line x1="10" x2="10.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                    <div class="side-menu__title">
                        Widgets 
                        <div class="side-menu__sub-icon" :class="{ 'transform rotate-180': openMenus.widgets }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon stroke-1.5 w-5 h-5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const openMenus = ref({
    dashboard: false,
    ecommerce: false,
    crud: false,
    users: true, // Users menu is open by default since it's active
    profile: false,
    pages: false,
    components: false,
    forms: false,
    widgets: false
})

const toggleSubmenu = (menuName) => {
    openMenus.value[menuName] = !openMenus.value[menuName]
}
</script>