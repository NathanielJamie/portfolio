import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type React from 'react';

import { cn } from '../../lib/utils.ts';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
	ref?: React.RefObject<React.ComponentRef<typeof AccordionPrimitive.Item>>;
}) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(
			'rounded-l data-[state=open]:pl-6 relative border-b border-b-black/30 border-l-3 border-l-transparent duration-600 data-[state=open]:border-l-primary transition-all',
			className
		)}
		{...props}
	/>
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = ({
	ref,
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
	ref?: React.RefObject<React.ComponentRef<typeof AccordionPrimitive.Trigger>>;
}) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex gap-4 items-center justify-between py-8 pl-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}
		>
			{children}
			<ChevronDown strokeWidth='1.2px' className='h-6 w-6 shrink-0 transition-transform duration-200' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
	ref,
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
	ref?: React.RefObject<React.ComponentRef<typeof AccordionPrimitive.Content>>;
}) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}
	>
		<div className={cn('pb-8 pt-0 pl-4', className)}>{children}</div>
	</AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
