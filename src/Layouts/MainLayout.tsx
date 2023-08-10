import React, {ReactElement, ReactNode} from 'react';

export interface LayoutProps {
    title: string,
    children: ReactNode
}
export const MainLayout: React.FC<LayoutProps> = ({title, children} : LayoutProps) =>
{
    return (
            <div className={"container_grid layout_container"}>
                <h1 className={"applicationTitle"}>{title}</h1>
                <div className={"searchBox"}></div>
                <span className={"horizontalDivider"}/>
                <div className={"mainContent"}>
                    <h4></h4>
                    {children}
                </div>
            </div>
    );
};