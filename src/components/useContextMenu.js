// useContextMenu.js
// src: https://blog.logrocket.com/creating-context-menu-react/
// with some modifications 

import { useEffect, useCallback, useState } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({});
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
      setTarget(event.target)
    },
    [setShow, setAnchorPoint, setTarget]
  );

  const handleClick = useCallback((e) => {
    if (!document.getElementById("context-menu")?.contains(e.target) && show) {
      setShow(false)
    }
  }, [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  return { anchorPoint, show, target };
};

export default useContextMenu;