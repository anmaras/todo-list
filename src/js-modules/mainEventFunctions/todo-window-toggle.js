export function todoWindowToggleSize(targetId, target, todoId) {
  const listDropArrow = document.querySelector(`[data-chevron-id="${todoId}"]`);
  if (targetId === "list-arrow") {
    listDropArrow.classList.toggle("rotate");
    target.classList.toggle("visible");
    /* Toggle the hidden class from all dom element inside the todo */
    for (let i = 1; i < target.childElementCount; i++) {
      target.children[i].classList.toggle("hidden");
    }
  }
}
