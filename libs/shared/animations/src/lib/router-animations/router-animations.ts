// prettier-ignore
import { animate, animation, AnimationReferenceMetadata, query, sequence, style } from '@angular/animations';

// page transition
export const routerTransitionPageLoad: AnimationReferenceMetadata = animation([
  // enter first
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true
  }),
  // leave then enter on route change
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateY(-1%)', opacity: 0 })),
        style({ position: 'fixed' })
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-1%)',
          opacity: 0,
          position: 'static'
        }),
        animate('100ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
      ],
      { optional: true }
    )
  ])
]);

// loading indicator start
export const routerTransitionLoadingStart: AnimationReferenceMetadata = animation([
  query(
    '.loading-indicator-progress',
    [style({ width: '0%' }), animate('15s linear', style({ width: '95%' }))],
    {
      optional: true
    }
  )
]);

// loading indicator end
export const routerTransitionLoadingEnd: AnimationReferenceMetadata = animation([
  query('.loading-indicator-progress', [animate('250ms linear', style({ width: '100%' }))], {
    optional: true
  })
]);
