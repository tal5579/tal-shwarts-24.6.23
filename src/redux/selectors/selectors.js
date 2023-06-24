import { useSelector } from 'react-redux';

const useAppData = () => useSelector((state) => state.appData);

export { useAppData };