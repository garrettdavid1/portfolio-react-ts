import { CSSProperties } from "@material-ui/core/styles/withStyles";

const justifyStart: CSSProperties = { justifyContent: 'flex-start' };
const justifyCenter: CSSProperties = { justifyContent: 'center' };
const justifyEven: CSSProperties = { justifyContent: 'space-evenly' };
const justifyEnd: CSSProperties = { justifyContent: 'flex-end' };
const justifySpaceBetween: CSSProperties = { justifyContent: 'space-between' };
const justifySpaceAround: CSSProperties = { justifyContent: 'space-around' };
const justifySpaceEvenly: CSSProperties = { justifyContent: 'space-evenly' };
const alignStart: CSSProperties = { alignItems: 'flex-start' };
const alignCenter: CSSProperties = { alignItems: 'center' };
const alignEnd: CSSProperties = { alignItems: 'end' };

export const flexRow: CSSProperties = { display: 'flex', flexDirection: 'row' };
export const flexRowStart: CSSProperties = { ...flexRow, ...justifyStart };
export const flexRowCenter: CSSProperties = { ...flexRow, ...justifyCenter };
export const flexRowEnd: CSSProperties = { ...flexRow, ...justifyEnd };
export const flexRowSpaceAround: CSSProperties = { ...flexRow, ...justifySpaceAround };
export const flexRowSpaceEvenly: CSSProperties = { ...flexRow, ...justifySpaceEvenly };
export const flexRowSpaceBetween: CSSProperties = { ...flexRow, ...justifySpaceBetween };

export const flexCol: CSSProperties = { display: 'flex', flexDirection: 'column' };
export const flexColStart: CSSProperties = { ...flexCol, ...justifyStart };
export const flexColCenter: CSSProperties = { ...flexCol, ...justifyCenter };
export const flexColEnd: CSSProperties = { ...flexCol, ...justifyEnd };
export const flexColEven: CSSProperties = { ...flexCol, ...justifyEven };
export const flexColSpaceBetween: CSSProperties = { ...flexCol, ...justifySpaceBetween };
export const flexColSpaceAround: CSSProperties = { ...flexCol, ...justifySpaceAround };

export const flexRowStartStart: CSSProperties = { ...flexRowStart, ...alignStart };
export const flexRowStartCenter: CSSProperties = { ...flexRowStart, ...alignCenter };
export const flexRowCenterStart: CSSProperties = { ...flexRowCenter, ...alignStart };
export const flexRowCenterCenter: CSSProperties = { ...flexRowCenter, ...alignCenter };
export const flexRowEndCenter: CSSProperties = { ...flexRowEnd, ...alignCenter };
export const flexRowSpaceBetweenCenter: CSSProperties = { ...flexRowSpaceBetween, ...alignCenter };
export const flexRowSpaceBetweenStart: CSSProperties = { ...flexRowSpaceBetween, ...alignStart };
export const flexRowSpaceEvenlyCenter: CSSProperties = { ...flexRowSpaceEvenly, ...alignCenter };
export const flexRowSpaceAroundCenter: CSSProperties = { ...flexRowSpaceAround, ...alignCenter };

export const flexColStartStart: CSSProperties = { ...flexColStart, ...alignStart };
export const flexColStartCenter: CSSProperties = { ...flexColStart, ...alignCenter };
export const flexColCenterStart: CSSProperties = { ...flexColCenter, ...alignStart };
export const flexColCenterCenter: CSSProperties = { ...flexColCenter, ...alignCenter };
export const flexColCenterEnd: CSSProperties = { ...flexColCenter, ...alignEnd };
export const flexColEvenCenter: CSSProperties = { ...flexColEven, ...alignCenter };
export const flexColSpaceBetweenCenter: CSSProperties = { ...flexColSpaceBetween, ...alignCenter };
export const flexColSpaceAroundCenter: CSSProperties = { ...flexColSpaceAround, ...alignCenter };
export const flexColEndCenter: CSSProperties = { ...flexColEnd, ...alignCenter };
export const flexColStartEnd: CSSProperties = { ...flexColStart, ...alignEnd };
export const flexColEndEnd: CSSProperties = { ...flexColEnd, ...alignEnd };
export const flexColEndStart: CSSProperties = { ...flexColEnd, ...alignStart };

export const fullWidth: CSSProperties = { width: '100%' };
export const halfWidth: CSSProperties = { width: '50%' };
export const fullHeight: CSSProperties = { height: '100%' };
export const clickable: CSSProperties = { cursor: 'pointer' };