export function ObjGroupBy(list, key) {
  return list.reduce(
    (groups, item) => ({
      ...groups,
      [item[key]]: [...(groups[item[key]] || []), item],
    }),
    {}
  )
}


