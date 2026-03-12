import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import { IconArrowsDiagonal, IconFilePlus } from "@tabler/icons-react";
import ActionButton from "@/components/buttons/action-button";

interface Props {

}

export default function CreatePermissionModal({ }: Props) {
    const [opened, { open, close }] = useDisclosure(false);

    return (<>
        <Modal opened={opened} onClose={close} title="Crear permiso de trabajo" centered>
            Create Permission Modal
        </Modal>

        <ActionButton 
            icon={<IconFilePlus size={28} stroke={1.5}/>}
            label="Crear permiso"
            variant="filled" 
            onClick={open} 
            size="lg"
            color='cyan.7'
        />
    </>);
}