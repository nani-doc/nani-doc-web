/**
 * 是否是gitee pages站点
 * @returns 
 */
export function isGiteeSite(): boolean {
    return window.location.host === 'nani-doc.gitee.io';
}