
export const richText = (obj) => {
    const sb = useStoryblokApi()
    return sb.richTextResolver.render(obj)
}