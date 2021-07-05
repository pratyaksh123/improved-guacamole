import Problem from '../Types/Problem'

const FetchProblemData = (data: String, difficulty: String): Problem => {
  const arr = data.split('.')
  const id = parseInt(arr[0])
  const name = arr[1]

  const problem = new Problem()
  problem.problemId = id
  problem.problemName = name.trim()
  problem.problemDifficulty = difficulty.trim()
  return problem
}

export default FetchProblemData
