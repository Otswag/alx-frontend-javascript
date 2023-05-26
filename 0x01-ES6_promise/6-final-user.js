import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';
async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  let result;
  try {
    result = await Promise.allSettled([signUpPromise, uploadPromise]);
  } catch (error) {
    result = error;
  }
  return result.map((promiseResult) => ({
    status: promiseResult.status,
    value: promiseResult.status === 'fulfilled' ? promiseResult.value : promiseResult.reason,
  }));
}
export default handleProfileSignup;
