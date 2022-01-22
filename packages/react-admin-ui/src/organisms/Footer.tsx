import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Row, { RowProps } from '../atoms/Row';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Cell from '../atoms/Cell';
import { Image } from '../atoms/Image';
import { rich_text } from '../types';
import useBox from '../hooks/useBox';
import Link from '@material-ui/core/Link';
import { WithDescription, WithLogo } from '../withs';

const defaultLinks = [];

export function Footer({ contact, copyright, description, links = defaultLinks, logo, ...props }: FooterProps) {
    const { t } = useTranslation();
    const [box, rest] = useBox(props, { color: 'dark', variant: 'contained' });

    return (
        <Row box={box} p={'xl'} {...rest}>
            <Cell col pl={'xl'}>
                <Image expand={false} size={'lg'} {...logo} className={'m-6 ml-1 rounded-full'} />
                <Cell mt={'sm'}>
                    <Text text={description} variant={'overline'} className={'leading-loose'} />
                </Cell>
                <Text mt={'sm'} text={copyright} variant={'overline'} className={'leading-loose'} />
            </Cell>
            {(links || contact) && (
                <Row>
                    <Div px={'xl'} pt={'xl_'}>
                        <Text mb={'lg'} text={t('project_name')} variant={'section'} />
                        {links.map((link, index) => (
                            <Link color={'inherit'} href={link.target} key={index} className={'block leading-loose'}>
                                {link.label}
                            </Link>
                        ))}
                    </Div>
                    {contact && (
                        <Div px={'xl'} className={clsx(links ? 'mt-6 sm:mt-0' : 'pt-8 sm:pt-0')}>
                            <Text mb={'lg'} text={t('footer_contact_us')} variant={'section'} />
                            <Link color={'inherit'} href={`tel:${contact?.phone}`} className={'block leading-loose'}>
                                {contact?.phone}
                            </Link>
                            <Link color={'inherit'} href={`mailto:${contact?.email}`} className={'block leading-loose'}>
                                {contact?.email}
                            </Link>
                            <Text text={contact?.address} variant={'body'} className={'block leading-loose'} />
                            {(contact.zipCode || contact.city) && (
                                <Text
                                    text={
                                        (contact.zipCode ? `${contact?.zipCode}` : '') +
                                        (contact.zipCode && contact.city ? ' / ' : '') +
                                        (contact.city ? `${contact?.city}` : '')
                                    }
                                    variant={'body'}
                                    className={'block leading-loose'}
                                />
                            )}
                            <Link href={contact?.facebook}>
                                <Icon icon={'fa-fab--facebook-square'} size={'md'} className={'mt-2'} />
                            </Link>
                        </Div>
                    )}
                </Row>
            )}
        </Row>
    );
}

export interface FooterProps extends RowProps, WithDescription, WithLogo {
    contact?: any;
    links?: any[];
    copyright?: rich_text;
}

export default Footer;
