import { useFormikContext } from "formik";
import { BrowserRouter, Prompt } from "react-router-dom";

const PromptCheck = () => {
    const formikContext = useFormikContext();
    return (
      
      <Prompt
        when={formikContext.dirty && formikContext.submitCount === 0}
        message="Are you sure want to leave?  data is unsaved."
      />

    );
  };

export default PromptCheck;