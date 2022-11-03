/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
 export function  navigateToFormStep(stepNumber) {
   
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("hide");
    });
   
    document.querySelectorAll(".c-stepsItem").forEach((formStepHeader) => {
        formStepHeader.classList.add("unfinished");
        formStepHeader.classList.remove("is_active", "completed");
    });
   
    document.querySelector("#step-" + stepNumber).classList.remove("hide");
  
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
   
    formStepCircle.classList.remove("unfinished", "completed");
    formStepCircle.classList.add("is_active");

    for (let index = 0; index < stepNumber; index++) {
    
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        
        if (formStepCircle) {
           
            formStepCircle.classList.remove("unfinished", "is_active");
            formStepCircle.classList.add("completed");
        }
    }
};