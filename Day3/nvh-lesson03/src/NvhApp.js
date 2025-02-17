import NvhClassComp from './components/NvhClassComp';
import NvhFuncCom from './components/NvhFuncComp';
import NvhJsExpression from "./components/NvhJsExpression";

function nvhApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS Lesson03 -Nong Van Hung</h1>

      <NvhJsExpression />
      

      <hr/>
      <NvhFuncCom />


      <hr/>
      <NvhClassComp />
    </div>
  );
}

export default nvhApp;
