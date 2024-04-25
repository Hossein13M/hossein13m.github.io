export type HomeMainButtonType = 'adpList' | 'telegram';
export type HomeMainButtonInfo = Record<'link' | 'text' | 'imageUrl', string>;

export const homeMainButton: Record<HomeMainButtonType, HomeMainButtonInfo> = {
    adpList: {
        link: 'https://adplist.org/mentors/hossein-mousavi',
        text: 'Book A Free Session With Me',
        imageUrl: 'adplist',
    },
    telegram: {
        link: 'https://t.me/DevDastan',
        text: 'Join My Telegram Channel',
        imageUrl: 'telegram',
    },
};
