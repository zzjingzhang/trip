export const getAssetURL =(image)=>{
  // 参数1 相对路径（相对于当前文件的路径）
  // 参数2 当前文件所在的路径
  return new URL(`../assets/img/${image}`,import.meta.url).href
}
