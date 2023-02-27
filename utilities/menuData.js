/**
 * Global state for the menu
 */
export async function getMenuData() {
    const config = useRuntimeConfig()

    const {
        data: linksData,
        pending,
        error,
        refresh,
    } = await useFetch(
        `${config.STORYBLOK_API_URL}/links/?token=${config.STORYBLOK_API_KEY_PREVIEW}&version=published`
    )

    //console.log('menuData = ', linksData)

    let menuDataArr = []
    const foldersToSkipArr = ['surgery', 'enrichment', 'articles']
    for (const [key, value] of Object.entries(linksData.value.links)) {
        //console.log('menu value - ', value)
        // temp condition to clear folders from, menu
        if (!foldersToSkipArr.includes(value.slug)) {
            if (value.is_folder || (!value.parent_id && value.real_path !== '/')) {
                menuDataArr.push({
                    label: value.name,
                    to: `/${value.slug}`,
                    command: () => {
                        //gaEvent('Click Tracking', 'Navigation', value.name)
                    }
                })
            }
        }
    }

    //console.log('menuDataArr = ', menuDataArr)

    return menuDataArr
}