import React from "react"
import { Dropdown, Menu } from "antd"
import { useLingui } from "@lingui/react"

import { locales, activate } from "../i18n.config"

export function Navigation() {
  const { i18n } = useLingui()
  const menu = (
    <Menu>
      {Object.keys(locales).map(locale => (
        <Menu.Item key={locale} onClick={() => activate(locale)}>
          {locales[locale]}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a>{locales[i18n.locale]}</a>
    </Dropdown>
  )
}
