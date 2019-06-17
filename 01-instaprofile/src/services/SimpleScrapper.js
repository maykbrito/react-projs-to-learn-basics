
const unicodeToChar = text => {
    return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
    });
}

const getInfo = (info, data) => {
    var searchModel = {
        img: /\"profile_pic_url\":\"(http.+?)\"/,
        bio:/\"biography\":\"(.+?)\"/,
        name:/\"full_name\":\"(.+?)\"/,
        followers: /\"edge_followed_by\":\{\"count\":(.+?)\},/,
        following: /\"edge_follow\":\{\"count\":(.+?)\},/,
        posts:/\"edge_owner_to_timeline_media\":\{\"count\":(.+?)\,\"/
    }
    return data.match(searchModel[info])[1]
    
}

export default async username => {

    const resolve = await fetch(`https://instagram.com/${username}`)
    const data = await resolve.text(); 

    return {
        username,
        img: getInfo('img', data),
        name: getInfo('name', data),
        bio: unicodeToChar(getInfo('bio', data)).replace(/\"\,/, ""),
        external_url: getInfo('external_url', data),
        followers: getInfo('followers', data),
        following: getInfo('following', data),
        posts: getInfo('posts', data),
    }

}