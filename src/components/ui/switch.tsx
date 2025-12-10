import * as SwitchPrimitives from '@radix-ui/react-switch';
import type React from 'react';

import { cn } from '../../lib/utils.ts';

const Switch = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
	ref?: React.RefObject<React.ComponentRef<typeof SwitchPrimitives.Root>>;
}) => (
	<SwitchPrimitives.Root
		className={cn(
			// Increased width for elongated look (w-11 → w-[51px], h-6 → h-[31px])
			'peer inline-flex h-[30px] w-[61px] shrink-0 cursor-pointer items-center rounded-lg border-2 border-transparent transition-colors duration-200 ease-[cubic-bezier(0.77,0,0.175,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				// Larger thumb with Apple-style shadow and smooth spring-like animation
				'pointer-events-none block h-[20px] w-[27px] rounded-sm bg-background ring-0 transition-transform duration-200 data-[state=checked]:translate-x-6.5 data-[state=unchecked]:translate-x-1'
			)}
		/>
	</SwitchPrimitives.Root>
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
