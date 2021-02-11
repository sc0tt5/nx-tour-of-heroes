// prettier-ignore
import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

const DEFAULT_TIMINGS = '500ms';

const startStyle = style({ opacity: 0, transform: 'translate3d(0, -{{ translate }}, 0)' });
const endStyle = style({ opacity: 1, transform: 'translate3d(0, 0, 0)' });

const fadeInDown = animation([animate('{{ timings }}', keyframes([startStyle, endStyle]))]);

/**
 * Fade-in the element from top-to-bottom by percent
 * @param options Options to set custom timings and the translate Y
 */
export function fadeInDownAnimation(options?: any): AnimationTriggerMetadata {
  return trigger(options || 'fadeInDown', [
    transition(':enter', useAnimation(fadeInDown), {
      params: {
        timings: (options && options.timings) || DEFAULT_TIMINGS,
        translate: (options && options.translate) || '5%'
      }
    })
  ]);
}
