import * as React from 'react';
import { FolderAddIcon } from '@heroicons/react/outline';
import { useRecoilValue } from 'recoil';
import { DashboardMessage } from '../../DashboardMessage';
import { SelectedMediaFolderAtom } from '../../state';
import { Messenger } from '@estruyf/vscode/dist/client';

export interface IFolderCreationProps {}

export const FolderCreation: React.FunctionComponent<IFolderCreationProps> = (props: React.PropsWithChildren<IFolderCreationProps>) => {
  const selectedFolder = useRecoilValue(SelectedMediaFolderAtom);

  const onFolderCreation = () => {
    Messenger.send(DashboardMessage.createMediaFolder, {
      selectedFolder
    });
  };

  return (
    <button 
      className={`inline-flex items-center px-3 py-1 border border-transparent text-xs leading-4 font-medium text-white dark:text-vulcan-500 bg-teal-600 hover:bg-teal-700 focus:outline-none disabled:bg-gray-500`}
      title={`Create new folder`}
      onClick={onFolderCreation}>
      <FolderAddIcon className={`mr-2 h-6 w-6`} />
      <span className={``}>Create new folder</span>
    </button>
  );
};