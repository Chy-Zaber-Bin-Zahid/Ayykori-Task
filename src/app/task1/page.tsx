"use client";
import React, { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const TaskOne = () => {
  const [panels, setPanels] = useState([{ id: 1, direction: "horizontal" }]);
  const [nextId, setNextId] = useState(2);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(prev => prev + 1);
  }, [panels]);

  // Add a new panel beside the clicked panel
  const addPanel = (parentId, direction) => {
    setPanels((prevPanels) => {
      const addNewPanel = (panelsList, parentId, newDirection) => {
        for (let i = 0; i < panelsList.length; i++) {
          const panel = panelsList[i];
          if (panel.id === parentId) {
            const newPanel = { id: nextId, direction: newDirection };
            setNextId(nextId + 1);

            if (newDirection === "vertical") {
              // Add new panel to the right of the clicked panel
              panelsList.splice(i + 1, 0, newPanel);
            } else if (newDirection === "horizontal") {
              // Add new panel below the clicked panel
              panelsList.splice(i + 1, 0, newPanel);
            }
            console.log("Updated Panels:", panelsList);
            return true;
          }
        }
        return false;
      };

      const updatedPanels = [...prevPanels];
      addNewPanel(updatedPanels, parentId, direction);
      return updatedPanels;
    });
  };

  return (
    <div className="w-full p-2 h-screen flex justify-center items-center">
      <PanelGroup direction="vertical">
        {panels.length !== 0 ? (panels.map((panel => (
          <React.Fragment key={panel.id}>
            <Panel >
              <div className='flex justify-center items-center gap-4 bg-black h-full'>
                <button
                  onClick={() => addPanel(panel.id, "vertical")}
                  className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
                >
                  V
                </button>
                <button
                  onClick={() => addPanel(panel.id, "horizontal")}
                  className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
                >
                  H
                </button>
              </div>
            </Panel>
            {(panels[index]?.id === panel?.id || panels[index]?.direction === panel?.direction)
              && <React.Fragment >
                <PanelResizeHandle className="w-10 bg-red-500" />
                <Panel >
                  <div className='flex justify-center items-center gap-4 bg-black h-full'>
                    <button
                      onClick={() => addPanel(panel.id, "vertical")}
                      className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
                    >
                      V
                    </button>
                    <button
                      onClick={() => addPanel(panel.id, "horizontal")}
                      className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
                    >
                      H
                    </button>
                  </div>
                </Panel>
              </React.Fragment>
            }
          </React.Fragment>
        )))) :
          <Panel>
            <div className='flex justify-center items-center gap-4 bg-black h-full'>
              <button
                onClick={() => addPanel(1, "vertical")}
                className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
              >
                V
              </button>
              <button
                onClick={() => addPanel(1, "horizontal")}
                className="bg-blue-500 px-4 py-1 rounded text-white transition-all duration-300 hover:bg-blue-600"
              >
                H
              </button>
            </div>
          </Panel>}
      </PanelGroup>
    </div>
  );
};

export default TaskOne;
