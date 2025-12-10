import { Button } from '@/components/ui/button.tsx';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog.tsx';
import type { PromptConfig } from '@/hooks/use-prompt.tsx';

interface PromptDialogProps {
	customId: string;
	isOpen: boolean;
	config: PromptConfig;
	onClose: () => void;
}

export function PromptDialog({ isOpen, config, onClose }: PromptDialogProps) {
	const { title, content, label, okLabel = 'OK', cancelLabel = 'Cancel', onOk, onCancel, buttons, children } = config;

	const handleOk = () => {
		onOk?.();
		onClose();
	};

	const handleCancel = () => {
		onCancel?.();
		onClose();
	};

	const displayContent = children || content || label;

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent>
				{title && (
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
				)}

				{displayContent && (
					<DialogDescription asChild>
						<div className='text-foreground'>{displayContent}</div>
					</DialogDescription>
				)}

				<DialogFooter>
					{buttons && buttons.length > 0 ? (
						buttons.map((button, index) => (
							<Button
								key={index}
								variant={button.variant || 'default'}
								onClick={() => {
									button.onClick();
									onClose();
								}}
							>
								{button.label}
							</Button>
						))
					) : (
						<>
							<Button variant='outline' onClick={handleCancel}>
								{cancelLabel}
							</Button>
							<Button variant='default' onClick={handleOk}>
								{okLabel}
							</Button>
						</>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
