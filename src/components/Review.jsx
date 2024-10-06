// src/steps/Review.js
import { useFormContext } from "./FormProvider";

export const Review = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h2>Review</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <p>Once you're satisfied with the data, you can submit the form to a backend service or save it to a local storage.</p>
    </div>
  );
};