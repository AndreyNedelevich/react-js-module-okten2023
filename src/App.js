import './App.css';
import {Posts} from "./components/Posts/Posts";
import Select from "./UI/Select";
import {useState} from "react";
import {Comments} from "./components/Comments/Comments";

function App() {

  const [state,setState]=useState('')
    console.log(state);

    let content

    if (state !== undefined &&  state==="Posts") {
        content = <Posts />;
    }

    if(state===""){
        content=<p>Выбирите один из вариантов...</p>
    }


    if (state !== undefined &&  state==="Comments") {
        content = <Comments/>
    }


  return (
    <div >
      <Select
          value={state}
          onChange={(selectedSort) =>
              setState( selectedSort )
          }
          defaultvalue="Choice show information"
          options={[
            { value: "Posts", name: "Show Posts" },
            { value: "Comments", name: "Show Comments" },
          ]}
      />
        <hr/>
        {content}



    </div>
  );
}

export default App;
