export default function clone(targetObject) {
  return JSON.parse(
    JSON.stringify(targetObject)
  );
}