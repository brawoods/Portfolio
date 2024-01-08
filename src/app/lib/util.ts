export const onToggle = function (
  state: boolean,
  set: React.Dispatch<React.SetStateAction<boolean>>
) {
  set(!state);
};
