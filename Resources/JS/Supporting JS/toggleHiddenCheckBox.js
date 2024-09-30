// toggle hidden checkbox or dropdown function

export function toggleDiv(targetDiv) { targetDiv.classList.toggle('hidden')}

export function addToggleHiddenEventListener(targetCheckBoxElement, divToTarget) {
    targetCheckBoxElement.addEventListener('click', () =>{
        toggleDiv(divToTarget);
    })
};
