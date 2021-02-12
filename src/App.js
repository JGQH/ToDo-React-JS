function App() {
  return (
    <>
      <div id="tasks"></div>
      <div id="editor">
        <textarea placeholder="Insert name of a task here..."></textarea>
        <div>
          <button>Create Task</button>
          <button>Add Previous Tasks</button>
        </div>
      </div>
    </>
  );
}

export default App;