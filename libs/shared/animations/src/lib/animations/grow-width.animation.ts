// prettier-ignore
import { animate, animation, AnimationTriggerMetadata, style, transition, trigger, useAnimation } from '@angular/animations';

const growWidth = animation([animate('{{ duration }}ms linear', style({ width: '{{ width }}' }))]);

/**
 * Grows the element's width up to the specified percent
 * @param options Options to set custom duration or width
 */
export function growWidthAnimation(options?: any): AnimationTriggerMetadata {
  return trigger(options || 'growWidth', [
    transition(':enter', useAnimation(growWidth), {
      params: {
        duration: (options && options.duration) || 15000,
        width: (options && options.width) || '95%'
      }
    }),
    transition(':leave', useAnimation(growWidth), {
      params: {
        duration: (options && options.duration) || 250,
        width: (options && options.width) || '100%'
      }
    })
  ]);
}
