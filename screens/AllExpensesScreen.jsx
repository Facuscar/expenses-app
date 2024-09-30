import ExpensesOutput from "../components/ExpensesOutput";

const AllExpensesScreen = () => {
  return (<ExpensesOutput expensesPeriod={"All time"} expenses={DUMMY_DATA}/>)
}

export default AllExpensesScreen;