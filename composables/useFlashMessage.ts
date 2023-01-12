const DEFAULT_TIMEOUT_MS = 3000;
export type FlashMessageType =
  | 'info'
  | 'danger'
  | 'success'
  | 'warning'
  | 'dark';

export const useFlashMessage = () => {
  const flashMessage = useState<string>('flashMessage', () => '');
  const flashMessageType = useState<FlashMessageType | undefined>(
    'flashMessageType',
    () => undefined
  );
  const flashMessageTimeoutId = useState<
    ReturnType<typeof setTimeout> | undefined
  >('flashMessageTimeoutId', () => {
    return undefined;
  });

  const resetFlashMessage = () => {
    flashMessage.value = '';
    flashMessageType.value = undefined;
  };
  const showFlashMessage = (
    message: string,
    type?: FlashMessageType,
    ms?: number
  ) => {
    resetFlashMessage();
    flashMessage.value = message;
    flashMessageType.value = type;
    clearTimeout(flashMessageTimeoutId.value);
    flashMessageTimeoutId.value = setTimeout(
      resetFlashMessage,
      ms ?? DEFAULT_TIMEOUT_MS
    );
  };
  const clearFlashMessage = () => {
    clearTimeout(flashMessageTimeoutId.value);
    resetFlashMessage();
  };
  return {
    flashMessage,
    flashMessageType,
    showFlashMessage,
    clearFlashMessage,
  };
};
