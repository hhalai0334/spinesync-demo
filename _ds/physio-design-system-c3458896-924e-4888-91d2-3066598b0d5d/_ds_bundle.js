/* @ds-bundle: {"format":3,"namespace":"PhysioDesignSystem_c34588","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconBox","sourcePath":"components/core/IconBox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0f46a5991488","components/core/Button.jsx":"5a74103a64e4","components/core/Card.jsx":"616ac4f64c81","components/core/IconBox.jsx":"999cd3cbf950","components/core/Input.jsx":"f9f82878fd9a","components/core/SectionHeading.jsx":"028210a00b71","ui_kits/website/app.jsx":"9756ea934860","ui_kits/website/sections.jsx":"cffa88d31bbf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PhysioDesignSystem_c34588 = window.PhysioDesignSystem_c34588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge / Tag — small status or category label. Soft (tinted) by default,
 * solid and outline variants available.
 */
function Badge({
  children,
  color = 'teal',
  variant = 'soft',
  icon,
  size = 'md',
  style = {}
}) {
  const palette = {
    teal: {
      solid: 'var(--teal-500)',
      soft: 'var(--teal-50)',
      text: 'var(--teal-700)'
    },
    navy: {
      solid: 'var(--ink-900)',
      soft: 'var(--gray-100)',
      text: 'var(--ink-800)'
    },
    success: {
      solid: 'var(--success)',
      soft: '#e4f4ec',
      text: '#1e7a48'
    },
    warning: {
      solid: 'var(--warning)',
      soft: '#fbf1d9',
      text: '#9a6f12'
    },
    danger: {
      solid: 'var(--danger)',
      soft: '#fbe6e5',
      text: '#a83531'
    }
  };
  const p = palette[color] || palette.teal;
  const variants = {
    soft: {
      background: p.soft,
      color: p.text,
      border: '1px solid transparent'
    },
    solid: {
      background: p.solid,
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: p.text,
      border: `1px solid ${p.solid}`
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: '10px'
    },
    md: {
      padding: '5px 12px',
      fontSize: '11px'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Physio primary button. Pill-shaped, uppercase, wide-tracked —
 * the theme's signature CTA. Variants: primary, outline, dark, ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = true,
  icon,
  iconRight,
  disabled = false,
  href,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '12px'
    },
    md: {
      padding: '13px 28px',
      fontSize: '13px'
    },
    lg: {
      padding: '17px 38px',
      fontSize: '14px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--teal-500)',
      color: '#fff',
      border: '2px solid var(--teal-500)',
      boxShadow: 'var(--shadow-teal)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--teal-600)',
      border: '2px solid var(--teal-500)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--ink-900)',
      color: '#fff',
      border: '2px solid var(--ink-900)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '2px solid transparent',
      boxShadow: 'none'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-button)',
    lineHeight: 1,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'var(--transition-base)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    className: iconRight,
    "aria-hidden": "true"
  }));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft, bordered container. The Physio surface unit for treatments,
 * blog posts, pricing and team members. Optional image header and hover lift.
 */
function Card({
  children,
  image,
  imageAlt = '',
  imageHeight = 200,
  padding = 'lg',
  hover = true,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: '18px',
    md: '24px',
    lg: '30px'
  };
  const wrap = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    transition: 'var(--transition-base)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap,
    onMouseEnter: hover ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'none';
    } : undefined
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: imageHeight,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pads[padding],
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconBox.jsx
try { (() => {
/**
 * IconBox — the treatment/service feature block at the heart of the
 * Physio theme: a circular icon over a heading and short description.
 * Two layouts (stacked / inline) and an optional bordered card frame.
 */
function IconBox({
  icon = 'fa-solid fa-heart-pulse',
  title,
  children,
  layout = 'stacked',
  framed = false,
  accent = 'teal',
  align = 'center',
  style = {}
}) {
  const accents = {
    teal: {
      bg: 'var(--teal-50)',
      fg: 'var(--teal-600)'
    },
    dark: {
      bg: 'var(--ink-900)',
      fg: '#fff'
    },
    solid: {
      bg: 'var(--teal-500)',
      fg: '#fff'
    }
  };
  const a = accents[accent] || accents.teal;
  const isInline = layout === 'inline';
  const wrap = {
    display: 'flex',
    flexDirection: isInline ? 'row' : 'column',
    alignItems: isInline ? 'flex-start' : align === 'left' ? 'flex-start' : 'center',
    textAlign: isInline ? 'left' : align,
    gap: isInline ? '18px' : '18px',
    padding: framed ? '38px 30px' : 0,
    background: framed ? 'var(--surface-card)' : 'transparent',
    border: framed ? '1px solid var(--border-subtle)' : 'none',
    borderRadius: framed ? 'var(--radius-lg)' : 0,
    boxShadow: framed ? 'var(--shadow-sm)' : 'none',
    transition: 'var(--transition-base)',
    ...style
  };
  const circle = {
    flexShrink: 0,
    width: '74px',
    height: '74px',
    borderRadius: 'var(--radius-full)',
    background: a.bg,
    color: a.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: circle
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      margin: 0,
      fontSize: 'var(--text-base)'
    }
  }, children)));
}
Object.assign(__ds_scope, { IconBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconBox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon and help/error text.
 * Also renders a textarea when multiline. Used in contact and booking forms.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  icon,
  multiline = false,
  rows = 4,
  error,
  help,
  required = false,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  const hasIcon = !!icon;
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--ink-800)',
    background: disabled ? 'var(--gray-50)' : 'var(--white)',
    border: `1px solid ${error ? 'var(--danger)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-md)',
    padding: hasIcon ? '13px 14px 13px 44px' : '13px 14px',
    outline: 'none',
    transition: 'var(--transition-base)',
    resize: multiline ? 'vertical' : 'none'
  };
  const focus = e => {
    e.target.style.borderColor = 'var(--teal-500)';
    e.target.style.boxShadow = 'var(--focus-ring)';
  };
  const blur = e => {
    e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border-strong)';
    e.target.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--ink-800)',
      marginBottom: '8px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, hasIcon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '16px',
      top: multiline ? '16px' : '50%',
      transform: multiline ? 'none' : 'translateY(-50%)',
      color: 'var(--gray-400)',
      fontSize: '15px'
    }
  }), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: fieldStyle,
    onFocus: focus,
    onBlur: blur
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: fieldStyle,
    onFocus: focus,
    onBlur: blur
  }, rest))), (error || help) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '7px',
      fontSize: '12px',
      color: error ? 'var(--danger)' : 'var(--gray-400)',
      fontFamily: 'var(--font-body)'
    }
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the eyebrow + title + optional intro lockup that opens
 * almost every Physio section. Centered or left-aligned.
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '720px' : 'none',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--teal-600)',
      marginBottom: '14px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? '#fff' : 'var(--text-heading)',
      margin: 0
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: onDark ? 'rgba(255,255,255,0.75)' : 'var(--text-body)',
      margin: '18px auto 0',
      maxWidth: align === 'center' ? '620px' : 'none'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* global React */
const DSk = window.PhysioDesignSystem_c34588 || {};
const {
  Button: Btn,
  Input: Field,
  Badge: Pill
} = DSk;
const {
  SiteHeader,
  Hero,
  StatsBand,
  Services,
  About,
  Team,
  Testimonial,
  BookingCTA,
  SiteFooter
} = window;
function BookingModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    service: 'Injury Rehabilitation',
    date: '',
    name: ''
  });
  if (!open) return null;
  const services = ['Injury Rehabilitation', 'Sports Physiotherapy', 'Pain Management', 'Post-Surgery Recovery'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,25,36,0.6)',
      backdropFilter: 'blur(3px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 520,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      padding: '24px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: 11,
      color: 'var(--teal-400)',
      fontWeight: 600
    }
  }, "Book an Appointment"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      marginTop: 4
    }
  }, step < 3 ? `Step ${step} of 2` : 'All done!')), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    onClick: onClose,
    style: {
      cursor: 'pointer',
      fontSize: 22,
      opacity: 0.7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink-800)',
      marginBottom: 12
    }
  }, "Choose a treatment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, services.map(s => {
    const sel = data.service === s;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      onClick: () => setData({
        ...data,
        service: s
      }),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px',
        border: `1.5px solid ${sel ? 'var(--teal-500)' : 'var(--border-subtle)'}`,
        borderRadius: 8,
        cursor: 'pointer',
        background: sel ? 'var(--teal-50)' : '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--ink-800)'
      }
    }, s), /*#__PURE__*/React.createElement("i", {
      className: `fa-solid ${sel ? 'fa-circle-check' : 'fa-circle'}`,
      style: {
        color: sel ? 'var(--teal-500)' : 'var(--gray-300)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    iconRight: "fa-solid fa-arrow-right",
    onClick: () => setStep(2)
  }, "Continue"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full Name",
    icon: "fa-solid fa-user",
    placeholder: "Jane Doe",
    value: data.name,
    onChange: e => setData({
      ...data,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred Date",
    icon: "fa-solid fa-calendar",
    type: "date",
    value: data.date,
    onChange: e => setData({
      ...data,
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    icon: "fa-solid fa-phone",
    placeholder: "(800) 123-4567"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    icon: "fa-solid fa-arrow-left",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "fa-solid fa-check",
    onClick: () => setStep(3)
  }, "Confirm Booking"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--teal-50)',
      color: 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 34,
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, "You're booked in"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      margin: '0 0 8px',
      lineHeight: 1.6
    }
  }, "We've reserved ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-800)'
    }
  }, data.service), data.date ? ` for ${data.date}` : '', ". A confirmation is on its way to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onClose
  }, "Done"))))));
}
function App() {
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: open
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(About, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(BookingCTA, {
    onBook: open
  }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* global React */
// Physio website UI kit — section components.
// Primitives come from the design-system bundle (window.PhysioDesignSystem_*).
const DS = window.PhysioDesignSystem_c34588 || {};
const {
  Button,
  Badge,
  IconBox,
  Card,
  SectionHeading,
  Input
} = DS;
const container = {
  maxWidth: 1170,
  margin: '0 auto',
  padding: '0 24px'
};

// Self-contained photographic placeholder (reliable, never a broken image).
function Photo({
  seed,
  h = 320,
  label,
  overlay = 0,
  round = 10,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h,
      borderRadius: round,
      overflow: 'hidden',
      background: `linear-gradient(135deg, #1c2a3a, #0c7d73)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${seed}/1000/800`,
    alt: label || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    onError: e => {
      e.target.style.display = 'none';
    }
  }), overlay > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `rgba(20,32,46,${overlay})`
    }
  }));
}

/* ---------------- Header ---------------- */
function SiteHeader({
  onBook
}) {
  const nav = ['Home', 'About', 'Treatments', 'Our Team', 'Pricing', 'Blog', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,0.8)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 42
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    style: {
      color: 'var(--teal-400)',
      marginRight: 8
    }
  }), "(800) 123-4567"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clock",
    style: {
      color: 'var(--teal-400)',
      marginRight: 8
    }
  }), "Mon\u2013Fri 8:00\u201318:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['facebook-f', 'instagram', 'x-twitter', 'linkedin-in'].map(s => /*#__PURE__*/React.createElement("i", {
    key: s,
    className: `fa-brands fa-${s}`,
    style: {
      cursor: 'pointer'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 84
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-heart-pulse"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, "physio", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-500)'
    }
  }, "."))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 14,
      textDecoration: 'none',
      color: i === 0 ? 'var(--teal-600)' : 'var(--ink-800)'
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    icon: "fa-solid fa-calendar-check",
    onClick: onBook
  }, "Book Now")));
}

/* ---------------- Hero ---------------- */
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    seed: "physiohero",
    h: "100%",
    round: 0,
    overlay: 0.55
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--teal-400)',
      marginBottom: 18
    }
  }, "Trusted Physiotherapy Care"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 58,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      margin: '0 0 22px'
    }
  }, "Move better,", /*#__PURE__*/React.createElement("br", null), "live without pain"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 32px',
      maxWidth: 520
    }
  }, "Expert hands-on treatment and tailored exercise to help you recover from injury and get back to the life you love."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    icon: "fa-solid fa-calendar-check",
    onClick: onBook
  }, "Make an Appointment"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.6)'
    }
  }, "Our Treatments")))));
}

/* ---------------- Trust stats band ---------------- */
function StatsBand() {
  const stats = [{
    icon: 'fa-solid fa-user-doctor',
    n: '15+',
    l: 'Expert Therapists'
  }, {
    icon: 'fa-solid fa-face-smile',
    n: '12k',
    l: 'Patients Treated'
  }, {
    icon: 'fa-solid fa-star',
    n: '4.9',
    l: 'Average Rating'
  }, {
    icon: 'fa-solid fa-award',
    n: '20',
    l: 'Years of Care'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      padding: '40px 24px'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: s.icon,
    style: {
      fontSize: 34,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.85,
      marginTop: 4
    }
  }, s.l))))));
}

/* ---------------- Services ---------------- */
function Services() {
  const items = [{
    icon: 'fa-solid fa-bone',
    t: 'Injury Rehabilitation',
    d: 'Structured recovery programs that rebuild strength and confidence after injury or surgery.'
  }, {
    icon: 'fa-solid fa-person-walking',
    t: 'Sports Physiotherapy',
    d: 'Return-to-play care and performance work for athletes at every level.'
  }, {
    icon: 'fa-solid fa-hand-holding-medical',
    t: 'Pain Management',
    d: 'Hands-on therapy and education to relieve chronic and acute pain for good.'
  }, {
    icon: 'fa-solid fa-bed-pulse',
    t: 'Post-Surgery Recovery',
    d: 'Gentle, guided rehabilitation to restore mobility safely after an operation.'
  }, {
    icon: 'fa-solid fa-hands',
    t: 'Manual Therapy',
    d: 'Targeted joint and soft-tissue techniques to release tension and restore movement.'
  }, {
    icon: 'fa-solid fa-dumbbell',
    t: 'Exercise Therapy',
    d: 'Personalised programs you can keep doing at home for lasting results.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Treatments",
    title: "Care for every stage of recovery",
    intro: "Whatever brought you here, we build a plan around your goals \u2014 and stay with you until you reach them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 54
    }
  }, items.map(s => /*#__PURE__*/React.createElement(IconBox, {
    key: s.t,
    icon: s.icon,
    title: s.t,
    framed: true,
    align: "left"
  }, s.d)))));
}

/* ---------------- About split ---------------- */
function About({
  onBook
}) {
  const points = ['Personalised one-to-one treatment', 'Evidence-based, hands-on care', 'Convenient evening appointments', 'Direct insurance billing'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0',
      background: 'var(--gray-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    seed: "physioabout",
    h: 460
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 24,
      background: 'var(--teal-500)',
      color: '#fff',
      padding: '22px 26px',
      borderRadius: 10,
      boxShadow: 'var(--shadow-teal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1
    }
  }, "20+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.9,
      marginTop: 4
    }
  }, "Years caring for", /*#__PURE__*/React.createElement("br", null), "our community"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Why Choose Physio",
    title: "A clinic built around your recovery",
    intro: "We take the time to understand you \u2014 your history, your goals and your day-to-day \u2014 so every plan fits your life, not just your diagnosis."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 24px',
      margin: '30px 0 34px'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-700)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check",
    style: {
      color: 'var(--teal-500)',
      marginTop: 3
    }
  }), p))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "fa-solid fa-calendar-check",
    onClick: onBook
  }, "Book Your Assessment"))));
}

/* ---------------- Team ---------------- */
function Team() {
  const team = [{
    n: 'Dr. Sarah Lane',
    r: 'Sports Physiotherapist',
    s: 'physioteam1'
  }, {
    n: 'James Okafor',
    r: 'Manual Therapist',
    s: 'physioteam2'
  }, {
    n: 'Dr. Mia Chen',
    r: 'Rehabilitation Lead',
    s: 'physioteam3'
  }, {
    n: 'Tom Becker',
    r: 'Exercise Physiologist',
    s: 'physioteam4'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 0',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Team",
    title: "Meet your physiotherapists",
    intro: "Friendly, highly-qualified specialists who genuinely care about getting you better."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      marginTop: 54
    }
  }, team.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.n,
    padding: "none",
    image: `https://picsum.photos/seed/${m.s}/600/600`,
    imageHeight: 260
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--ink-900)',
      margin: '0 0 4px'
    }
  }, m.n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--teal-600)',
      fontSize: 13,
      fontFamily: 'var(--font-heading)',
      fontWeight: 500
    }
  }, m.r), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      marginTop: 14,
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-linkedin-in"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-x-twitter"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope"
  }))))))));
}

/* ---------------- Testimonial ---------------- */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '120px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    seed: "physioquote",
    h: "100%",
    round: 0,
    overlay: 0.82
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: '#fff',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-quote-left",
    style: {
      fontSize: 44,
      color: 'var(--teal-400)',
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.5,
      margin: '0 0 28px'
    }
  }, "\u201CAfter months of back pain I'd almost given up. The team here had me moving freely again in six weeks. I can't recommend them enough.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16
    }
  }, "Jennifer Ebron"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--teal-300)',
      fontSize: 13
    }
  }, "Neck & Back Pain Treatment")));
}

/* ---------------- CTA band ---------------- */
function BookingCTA({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 32,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "Ready to start feeling better?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 17,
      margin: 0
    }
  }, "Book an assessment today \u2014 most patients are seen within 48 hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    icon: "fa-solid fa-calendar-check",
    onClick: onBook
  }, "Make an Appointment"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "fa-solid fa-phone",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "(800) 123-4567"))));
}

/* ---------------- Footer ---------------- */
function SiteFooter() {
  const cols = [{
    h: 'Treatments',
    items: ['Injury Rehab', 'Sports Therapy', 'Pain Management', 'Manual Therapy']
  }, {
    h: 'Clinic',
    items: ['About Us', 'Our Team', 'Pricing', 'Careers']
  }, {
    h: 'Resources',
    items: ['Blog', 'FAQs', 'Insurance', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#0f1924',
      color: 'rgba(255,255,255,0.65)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40,
      padding: '70px 24px 50px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-heart-pulse"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, "physio", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-500)'
    }
  }, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      margin: '0 0 18px',
      maxWidth: 280
    }
  }, "Expert physiotherapy and rehabilitation care, helping our community move better and live without pain."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['facebook-f', 'instagram', 'x-twitter', 'linkedin-in'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-brands fa-${s}`
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 15,
      color: '#fff',
      margin: '0 0 18px'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.65)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 24px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Physio Clinic. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy Policy \xB7 Terms"))));
}
Object.assign(window, {
  Photo,
  SiteHeader,
  Hero,
  StatsBand,
  Services,
  About,
  Team,
  Testimonial,
  BookingCTA,
  SiteFooter,
  container
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconBox = __ds_scope.IconBox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
