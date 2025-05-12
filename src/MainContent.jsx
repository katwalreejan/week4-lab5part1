// MainContent.jsx
import Article from "./Article";

function MainContent() {
  return (
    <main>
      <Article
        title="React Introduction"
        content="React helps you build interactive UI."
      />
      <Article
        title="Props"
        content="Props are passed from parent to child component"
      />
    </main>
  );
}

export default MainContent;
