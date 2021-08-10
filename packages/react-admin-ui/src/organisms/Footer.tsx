import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { Image } from '../atoms/Image';
import { WithDescription, WithLogo } from '../withs';
import { Block, Icon } from '../atoms';
import Link from '@material-ui/core/Link';
import { AsBox } from '../as';

export function Footer({
    className,
    logo,
    color = 'dark',
    variant = 'contained',
    contact,
    links = [],
    description,
    copyright,
}: FooterProps) {
    const { t } = useTranslation();

    return (
        <Block className={className} color={color} variant={variant} corner={'square'} padding={'none'}>
            <Row className={clsx('p-8 xs:flex-col')}>
                <div className={'flex-1 flex flex-col pl-8'}>
                    {logo && <Image {...logo} className={'m-6 w-24 h-24 ml-1 rounded-full'} expand={false} />}
                    <div className={'flex-1 mt-3'}>
                        <Text className={'mt-2 leading-loose'} variant={'overline'} text={description} />
                    </div>
                    <Text className={'mt-2 leading-loose'} variant={'overline'} text={copyright} />
                </div>
                {(links || contact) && (
                    <div className={'flex sm:flex-col'}>
                        <div className={'px-8 xs:pt-8'}>
                            <Text className={'mb-6'} variant={'section'} text={t('project_name')} />
                            {links.map((link, index) => (
                                <Link key={index} color="inherit" href={link.target} className={'block leading-loose'}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {contact && (
                            <div className={clsx('px-8', links ? 'sm:mt-6' : 'xs:pt-8')}>
                                <Text className={'mb-6'} variant={'section'} text={t('footer_contact_us')} />
                                <Link color="inherit" href={`tel:${contact?.phone}`} className={'block leading-loose'}>
                                    {contact?.phone}
                                </Link>
                                <Link
                                    color="inherit"
                                    href={`mailto:${contact?.email}`}
                                    className={'block leading-loose'}
                                >
                                    {contact?.email}
                                </Link>
                                <Text variant={'body'} text={contact?.address} className={'block leading-loose'} />
                                {(contact.zipCode || contact.city) && (
                                    <Text
                                        variant={'body'}
                                        text={
                                            (contact.zipCode ? `${contact?.zipCode}` : '') +
                                            (contact.zipCode && contact.city ? ' / ' : '') +
                                            (contact.city ? `${contact?.city}` : '')
                                        }
                                        className={'block leading-loose'}
                                    />
                                )}
                                <Link href={contact?.facebook}>
                                    <Icon icon={'fa-fab--facebook-square'} className={'mt-2'} size={'md'} />
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </Row>
        </Block>
    );
}

export interface FooterProps extends AsBox, WithDescription, WithLogo {
    contact?: any;
    links?: any[];
    copyright?: rich_text;
}

export default Footer;
