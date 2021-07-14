const isProblem = (url: String): Boolean => {
  const lst = url.split('/')
  // [ 'https:', '', 'leetcode.com', 'problems', 'two-sum', '' ]
  if (lst[3] === 'problems' && lst.length == 6) {
    return true
  } else {
    return false
  }
}

export default isProblem
