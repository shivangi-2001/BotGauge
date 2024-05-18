import React, { useEffect } from "react";

function App() {
  const [menu, setMenu] = React.useState(false);
  const [btnpill, setBtnPill] = React.useState(false);
  const [btnpill2, setBtnPill2] = React.useState(false);
  const [btnpill3, setBtnPill3] = React.useState(false);

  const setButtonValue = (value, color) => {
    const textSelector1 = document.querySelectorAll("#textSelector1");
    for (var i=0; i<=textSelector1.length;  i++){
      textSelector1[i].innerHTML = `"${value}"`; 
      textSelector1[i].style.color = color; 
    }
  };

  const setButtonValue2 = (value, color) => {
    const textSelector2 = document.querySelectorAll("#textSelector2");
    for (var i=0; i<=textSelector2.length;  i++){
      textSelector2[i].innerHTML = `"${value}"`; 
      textSelector2[i].style.color = color; 
    }
  }

  const setButtonValue3 = (value, color) => {
    const textSelector3 = document.querySelectorAll("#textSelector3");
    for (var i=0; i<=textSelector3.length;  i++){
      textSelector3[i].innerHTML = `"${value}"`; 
      textSelector3[i].style.color = color; 
    }
  }

  const SetCheckBox = () => {
    const inputElement = document.getElementById("input");
    inputElement.innerHTML = "Something Type";

    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
            inputElement.innerHTML = "Something Type";
          }
        });
        const liElement = checkbox.parentElement.nextElementSibling;
        if (checkbox.checked) {
          inputElement.innerHTML = liElement.innerHTML;
          setBtnPill(false)
          setBtnPill2(false)
          setBtnPill3(false)
          setMenu(false)
        } else {
          inputElement.innerHTML = "Something Type";
        }

        setMenu(false)
      });
    });
  };

  useEffect(() => {
    SetCheckBox();

    // Clean up event listeners when component unmounts
    return () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", () => {});
      });
    };
  }, []);

  return (
    <div>
      {/* display on "Text" is click and select the button value to "Text place "*/}
      <div className={`max-w-96 px-3 py-2 my-6 ${btnpill ? "flex" : "hidden"} justify-between gap-4 rounded-full bg-slate-200`}>
        <button className="rounded-full" value="Day" onClick={() => setButtonValue("Day", "Green")}>
          Day
        </button>
        <button className="rounded-full" value="Night" onClick={() => setButtonValue("Night", "purple")}>
          Night
        </button>
        <button  className="rounded-full"  value="Sunset"  onClick={() => setButtonValue("Sunset", "red")}>
          Sunset
        </button>
        <button  className="rounded-full"  value="Dawn"  onClick={() => setButtonValue("Dawn", "Blue")}>
          Dawn
        </button>
        <button
          type="button"
          onClick={() => setBtnPill(false)}
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div  className={`max-w-96 px-3 py-2 my-6 ${    btnpill2 ? "flex" : "hidden"  } justify-between gap-4 rounded-full bg-slate-200`}>
        <button className="rounded-full" value="Day" onClick={() => setButtonValue2("Day 1", "Pink")}>
          Day 1
        </button>
        <button  className="rounded-full"  value="Night"  onClick={() => setButtonValue2("Night 1", "grey")}>
          Night 1
        </button>
        <button  className="rounded-full"  value="Sunset"  onClick={() => setButtonValue2("Sunset 1", "blue")}>
          Sunset 1
        </button>
        <button  className="rounded-full"  value="Dawn"  onClick={() => setButtonValue2("Dawn 1", "brown")}>
          Dawn 1
        </button>
        <button
          type="button"
          onClick={() => setBtnPill2(false)}
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>


      <div className={` max-w-96 px-3 py-2 my-6 ${    btnpill3 ? "flex" : "hidden"  } justify-between gap-4 rounded-full bg-slate-200`}>
        <button  className="rounded-full"  value="Day"  onClick={() => setButtonValue3("Day 3", "Brown")}>
          Day 3
        </button>
        <button  className="rounded-full"  value="Night"  onClick={() => setButtonValue3("Night 3", "Red")}>
          Night 3
        </button>
        <button  className="rounded-full"  value="Sunset"  onClick={() => setButtonValue3("Sunset 3", "blue")}>
          Sunset 3
        </button>
        <button  className="rounded-full"  value="Dawn"  onClick={() => setButtonValue3("Dawn 3", "gold")}>
          Dawn 3
        </button>
        <button
          type="button"
          onClick={() => setBtnPill3(false)}
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form action="" className="relative flex flex-col justify-center border p-5">

        <div className="mb-5">
        <h1 className=" text-pretty">Form Selection</h1>
        </div>

      <div
        className="flex justify-center w-80 h-10 rounded-md border text-slate-400"
        id="input"
        onClick={() => setMenu(true)}
      ></div>
      <div id="Tags"></div>

      <div id="myDiv" className={`px-4 ${menu ? "flex" : "hidden"}`}>
        <div className="absolute left-50 border rounded-lg p-2 gap-4 w-80">
          <div className="p-2 rounded-sm bg-slate-100 mb-2 flex align-middle">
            <span>
              <input type="checkbox" name="1" className="mr-3" /> 
            </span>
            <li href="#">
              Click _css(
              <a className="text-yellow-700" id="SelectSelector">
                "Selector"
              </a>
              )
            </li>
          </div>

          <div className="p-2 rounded-sm bg-slate-100 mb-2 flex align-middle">
            <span>
              <input type="checkbox" name="2" className="mr-3" />
            </span>
            <li href="#">
              Click{" "}
              <a
                className="text-yellow-500"
                id="textSelector1"
                onClick={() => setBtnPill(true)}
              >
                "Text"
              </a>{" "}
              radio for{" "}
              <a
                className="text-yellow-500"
                id="textSelector2"
                onClick={() => setBtnPill2(true)}
              >
                "Text"
              </a>
            </li>
          </div>

          <div className="p-2 rounded-sm bg-slate-100 mb-2 flex align-middle">
            <span>
              <input type="checkbox" name="3" className="mr-3"/>
            </span>
            <li href="#">
              Click{" "}
              <a className="text-yellow-500" id="textSelector3" onClick={() => setBtnPill3(true)}>
                "Text"
              </a>{" "}
              radio
            </li>
          </div>

        </div>
      </div>


      <div className="flex justify-end mt-6 gap-2">
      <button className="bg-slate-200 px-4 py-2 rounded-md">Close</button>
        <button className="bg-red-400 px-4 py-2 rounded-md">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default App;
