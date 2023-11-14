/**
 * 处理router,参考vue-router内部实现
 */

export function createRouteMap(routes) {
  const pathMap = Object.create(null)
  routes.forEach((route) => {
    addRouteRecord(pathMap, route, null)
  })
  return pathMap
}

// 添加路由记录
export function addRouteRecord(pathMap, route, parent) {
  const { path, title } = route
  const record = { path, title, parent }
  if (route.children) {
    // 遍历生成子路由记录
    route.children.forEach((child) => {
      addRouteRecord(pathMap, child, record)
    })
  }
  if (!pathMap[record.path]) {
    pathMap[record.path] = record
  }
}

// 转为数组
export function formatMatch(record) {
  const res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}

// 类型vue-router的this.$route.matched
export function getMatched(routes) {
  const pathMap = createRouteMap(routes)
  return pathMap
}

/**
 * 根据pathname查找路由对象
 * @param {*} pathname  地址
 * @param {*} routerList 路由列表
 */
export function searchRoute(pathname, routerList) {
  const list = flattenTree(routerList)
  const result = list.find((item) => item.path === pathname)
  return result
}

// 将树形结构转换一维数组
export function flattenTree(list) {
  let result = []
  list.forEach((item) => {
    // 没有children
    if (!item.children) {
      result.push(item)
    }
    if (item.children && item.children.length > 0) {
      let tempResult = flattenTree(item.children)
      result = [...result, ...tempResult]
    }
  })
  return result
}
