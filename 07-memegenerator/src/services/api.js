export default async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const { data } = await response.json()
    return data.memes;
}