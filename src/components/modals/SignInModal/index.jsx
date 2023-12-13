import { Center } from '@chakra-ui/react';
import BaseModal from '../BaseModal'
import GithubLogin from './GithubLogin';

export default function SignInModal({ isOpen, onClose }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title='Sign In'>
      <Center h='20'>
        <GithubLogin />
      </Center>
    </BaseModal>
  )
}
