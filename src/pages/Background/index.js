import TabsListener from '../../../utils/TabsListener'

const regex = RegExp('https://leetcode.com/*')
try {
  TabsListener(regex)
} catch (error) {
  console.log(error)
}
