(function(e) {
    function t(t) {
        for (var r, o, i = t[0], n = t[1], s = t[2], m = 0, d = []; m < i.length; m++) o = i[m], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        u && u(t);
        while (d.length) d.shift()();
        return c.push.apply(c, s || []), l()
    }

    function l() {
        for (var e, t = 0; t < c.length; t++) {
            for (var l = c[t], r = !0, i = 1; i < l.length; i++) {
                var n = l[i];
                0 !== a[n] && (r = !1)
            }
            r && (c.splice(t--, 1), e = o(o.s = l[0]))
        }
        return e
    }
    var r = {},
        a = {
            app: 0
        },
        c = [];

    function o(t) {
        if (r[t]) return r[t].exports;
        var l = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(l.exports, l, l.exports, o), l.l = !0, l.exports
    }
    o.m = e, o.c = r, o.d = function(e, t, l) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: l
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (o.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(l, r, function(t) {
                return e[t]
            }.bind(null, r));
        return l
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        n = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var s = 0; s < i.length; s++) t(i[s]);
    var u = n;
    c.push([0, "chunk-vendors"]), l()
})({
    0: function(e, t, l) {
        e.exports = l("56d7")
    },
    "004a": function(e, t, l) {},
    "2be4": function(e) {
        e.exports = JSON.parse('{"transports":[{"key":"auto","name":"Автомобиль","nameWhat":"Автомобиля"},{"key":"moto","name":"Мотоцикл","nameWhat":"Мотоцикла"},{"key":"moto-big","name":"Большой мотоцикл","nameWhat":"Б. мотоцикла"},{"key":"quadro","name":"Квадроцикл","nameWhat":"Квадроцикла"},{"key":"baggi","name":"Багги","nameWhat":"Багги"},{"key":"pickup","name":"Пикап/Бус","nameWhat":"Пикапа"},{"key":"boat","name":"Лодка","nameWhat":"Лодки"},{"key":"trailer","name":"Прицеп (в т.ч. к лодке/гидроциклу)","nameWhat":"Прицепа"},{"key":"trailer-cottage","name":"Прицеп-дача","nameWhat":"Прицепа-дачи"},{"key":"tricycle","name":"Трицикл (2 колеса спереди)","nameWhat":"Трицикла"},{"key":"snowmobile","name":"Снегоход","nameWhat":"Снегохода"},{"key":"hydrocycle","name":"Гидроцикл","nameWhat":"Гидроцикла"},{"key":"golf-cart","name":"Гольф-кар","nameWhat":"Гольф-кара"}],"fuel":[{"key":"gasoline","name":"Бензин"},{"key":"diesel","name":"Дизель"}],"boatType":[{"key":"motor","name":"Моторная"},{"key":"suspended-motor","name":"С подвесным мотором"}],"platforms":[],"auctions_old":[{"key":"county_usa","name":"США","isHeader":true},{"key":"Copart","name":"Copart"},{"key":"Iaai","name":"Iaai"},{"key":"Manheim","name":"Manheim"}],"auctions":[{"key":"county_usa","name":"США","hideOnDeliveryTo":[],"options":[{"key":"Copart","name":"Copart","hideOnDeliveryTo":[]},{"key":"CrashedToys","name":"CrashedToys (Copart)","hideOnDeliveryTo":[]},{"key":"Iaai","name":"Iaai","hideOnDeliveryTo":[]},{"key":"RecRides","name":"RecRides (IAAI)","hideOnDeliveryTo":[]},{"key":"Manheim","name":"Manheim","hideOnDeliveryTo":[]}]},{"key":"county_canada","name":"Канада","hideOnDeliveryTo":[],"options":[{"key":"Impact_canada","name":"Impact","hideOnDeliveryTo":[]},{"key":"Copart_canada","name":"Copart Canada","hideOnDeliveryTo":[]},{"key":"Manheim_canada","name":"Manheim Canada","hideOnDeliveryTo":[]}]}],"deliverys":[{"key":"by","name":"Беларусь, Минск","cityNameOld":"Минска","cityName":"Клайпеды"},{"key":"ru","name":"Россия, Москва","cityNameOld":"Москвы","cityName":"Клайпеды"},{"key":"ru_spb","name":"Россия, Санкт-Петербург","cityNameOld":"Санкт-Петербурга","cityName":"Клайпеды"}]}')
    },
    "49f8": function(e, t, l) {
        var r = {
            "./pl.json": "89b2",
            "./ru.json": "7704"
        };

        function a(e) {
            var t = c(e);
            return l(t)
        }

        function c(e) {
            if (!l.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        a.keys = function() {
            return Object.keys(r)
        }, a.resolve = c, e.exports = a, a.id = "49f8"
    },
    "56d7": function(e, t, l) {
        "use strict";
        l.r(t);
        l("e260"), l("e6cf"), l("cca6"), l("a79d");
        var r = l("7a23"),
            a = {
                class: "is-wm-calculator-wrapper"
            },
            c = {
                class: "is-wm-calculator-header"
            },
            o = {
                class: "is-wm-calculator-outer"
            },
            i = {
                class: "is-wm-calculator-outer"
            };

        function n(e, t, l, n, s, u) {
            var m = Object(r["resolveComponent"])("CalculatorArea"),
                d = Object(r["resolveComponent"])("ResultArea"),
                b = Object(r["resolveComponent"])("CreditCalculatorArea"),
                O = Object(r["resolveComponent"])("CreditResultArea");
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", a, [Object(r["createElementVNode"])("div", c, [Object(r["createElementVNode"])("h1", null, Object(r["toDisplayString"])(e.$t("")), 1)]), Object(r["createElementVNode"])("div", o, [Object(r["createVNode"])(m, {
                lists: s.lists,
                form: s.calculatorForm
            }, null, 8, ["lists", "form"]), Object(r["createVNode"])(d, {
                lists: s.lists,
                form: s.calculatorForm,
                result: s.calculatorResult,
                onToggleCreditArea: t[0] || (t[0] = function(e) {
                    return u.toggleCrediteArea()
                })
            }, null, 8, ["lists", "form", "result"])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", i, [Object(r["createVNode"])(b, {
                lists: s.lists,
                calculatorForm: s.calculatorForm,
                calculatorResult: s.calculatorResult,
                form: s.creditForm
            }, null, 8, ["lists", "calculatorForm", "calculatorResult", "form"]), Object(r["createVNode"])(O, {
                lists: s.lists,
                calculatorForm: s.calculatorForm,
                calculatorResult: s.calculatorResult,
                creditResult: s.creditResult,
                form: s.creditForm
            }, null, 8, ["lists", "calculatorForm", "calculatorResult", "creditResult", "form"])], 512), [
                [r["vShow"], s.showCreditArea]
            ])])
        }
        var s = l("1da1"),
            u = (l("f00c"), l("a9e3"), l("d81d"), l("caad"), l("2532"), l("4de4"), l("99af"), l("96cf"), {
                class: "is-wm-calculator-calculator"
            }),
            m = {
                class: "is-wm-calculator-calculator--line"
            },
            d = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            b = {
                class: "is-wm-calculator-calculator--line"
            },
            O = {
                for: "calculatorFormTrailerWithBoatId",
                class: "is-wm-calculator-calculator--line_label"
            },
            p = {
                class: "is-wm-calculator-calculator--line"
            },
            j = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            h = {
                class: "is-wm-calculator-calculator--line"
            },
            w = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            y = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            v = Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-calculator--line_field_hint"
            }, [Object(r["createElementVNode"])("span", null, "0 м"), Object(r["createElementVNode"])("span", null, "100 м")], -1),
            f = {
                class: "is-wm-calculator-calculator--line"
            },
            g = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            V = {
                class: "is-wm-calculator-calculator--line"
            },
            _ = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            N = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            D = {
                class: "is-wm-calculator-calculator--line_field_hint"
            },
            k = {
                class: "is-wm-calculator-calculator--line"
            },
            E = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            S = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            F = Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-calculator--line_field_hint"
            }, [Object(r["createElementVNode"])("span", null, "0 $"), Object(r["createElementVNode"])("span", null, "100 000 $")], -1),
            z = {
                class: "is-wm-calculator-calculator--line"
            },
            T = {
                for: "calculatorFormNDSReturnId",
                class: "is-wm-calculator-calculator--line_label"
            },
            C = {
                class: "is-wm-calculator-calculator--line is-wm-calculator-calculator--line_row"
            },
            P = {
                class: "is-wm-calculator-calculator--line_part"
            },
            A = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            R = {
                class: "is-wm-calculator-calculator--line_part"
            },
            U = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            $ = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            x = {
                class: "is-wm-calculator-calculator--line"
            },
            I = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            B = {
                class: "is-wm-calculator-calculator--line"
            },
            K = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            M = {
                class: "is-wm-calculator-calculator--line"
            },
            Z = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            L = {
                class: "is-wm-calculator-calculator--line"
            },
            W = {
                for: "calculatorFormDeliveryViaGermanyId",
                class: "is-wm-calculator-calculator--line_label"
            },
            G = {
                class: "is-wm-calculator-calculator--line"
            },
            H = {
                for: "calculatorFormDeliveryToHomeId",
                class: "is-wm-calculator-calculator--line_label"
            },
            X = {
                class: "is-wm-calculator-calculator--line"
            },
            Y = {
                for: "calculatorFormRetroAutoId",
                class: "is-wm-calculator-calculator--line_label"
            },
            J = {
                class: "is-wm-calculator-calculator--line is-wm-calculator-calculator--line_row"
            },
            q = {
                class: "is-wm-calculator-calculator--line_part"
            },
            Q = {
                for: "calculatorFormIsElectroId",
                class: "is-wm-calculator-calculator--line_label"
            },
            ee = {
                class: "is-wm-calculator-calculator--line_part"
            },
            te = {
                for: "calculatorFormIsGibridlId",
                class: "is-wm-calculator-calculator--line_label"
            },
            le = {
                class: "is-wm-calculator-calculator--line"
            },
            re = {
                for: "calculatorFormIsSUVId",
                class: "is-wm-calculator-calculator--line_label"
            },
            ae = {
                class: "is-wm-calculator-calculator--line"
            },
            ce = {
                for: "calculatorFormIsConnectableGibridlId",
                class: "is-wm-calculator-calculator--line_label"
            },
            oe = {
                class: "is-wm-calculator-calculator--line"
            },
            ie = {
                for: "calculatorFormPreferentialId",
                class: "is-wm-calculator-calculator--line_label"
            };

        function ne(e, t, l, a, c, o) {
            var i = Object(r["resolveComponent"])("font-awesome-icon"),
                n = Object(r["resolveComponent"])("Select"),
                s = Object(r["resolveComponent"])("money3"),
                ne = Object(r["resolveComponent"])("vue-slider"),
                se = Object(r["resolveDirective"])("click-outside");
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", u, [Object(r["createElementVNode"])("div", m, [Object(r["createElementVNode"])("label", d, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Тип транспорта")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.transports,
                modelValue: c.calculatorForm.transport,
                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                    return c.calculatorForm.transport = e
                })
            }, null, 8, ["items", "modelValue"])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", b, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormTrailerWithBoatId",
                type: "checkbox",
                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                    return c.calculatorForm.trailerWithBoat = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.trailerWithBoat]
            ]), Object(r["createElementVNode"])("label", O, Object(r["toDisplayString"])(e.$t("Вместе с лодкой")), 1)], 512), [
                [r["vShow"], o.showTrailerWithBoatField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", p, [Object(r["createElementVNode"])("label", j, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Тип топлива")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.fuel,
                modelValue: c.calculatorForm.fuel,
                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                    return c.calculatorForm.fuel = e
                })
            }, null, 8, ["items", "modelValue"])], 512), [
                [r["vShow"], o.showFuelField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", h, [Object(r["createElementVNode"])("label", w, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Длина")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", y, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.length,
                "onUpdate:modelValue": t[3] || (t[3] = function(e) {
                    return c.calculatorForm.length = e
                })
            }, c.config.length, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(ne, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.length,
                "onUpdate:modelValue": t[4] || (t[4] = function(e) {
                    return c.calculatorForm.length = e
                })
            }, c.config.sliderLength), null, 16, ["modelValue"]), v])], 512), [
                [r["vShow"], o.showLengthField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", f, [Object(r["createElementVNode"])("label", g, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Тип лодки")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.boatType,
                modelValue: c.calculatorForm.boatType,
                "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                    return c.calculatorForm.boatType = e
                })
            }, null, 8, ["items", "modelValue"])], 512), [
                [r["vShow"], o.showBoatTypeField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", V, [Object(r["createElementVNode"])("label", _, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Вес")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", N, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.weight,
                "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                    return c.calculatorForm.weight = e
                })
            }, c.config.weight, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(ne, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.weight,
                "onUpdate:modelValue": t[7] || (t[7] = function(e) {
                    return c.calculatorForm.weight = e
                })
            }, c.config.sliderWeight), null, 16, ["modelValue"]), Object(r["createElementVNode"])("div", D, [Object(r["createElementVNode"])("span", null, "0 " + Object(r["toDisplayString"])(e.$t("кг")), 1), Object(r["createElementVNode"])("span", null, "10 000 " + Object(r["toDisplayString"])(e.$t("кг")), 1)])])], 512), [
                [r["vShow"], o.showWeightField]
            ]), Object(r["createElementVNode"])("div", k, [Object(r["createElementVNode"])("label", E, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.carPriceFieldLabel) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", S, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.carPrice,
                "onUpdate:modelValue": t[8] || (t[8] = function(e) {
                    return c.calculatorForm.carPrice = e
                })
            }, c.config.money, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(ne, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.carPrice,
                "onUpdate:modelValue": t[9] || (t[9] = function(e) {
                    return c.calculatorForm.carPrice = e
                })
            }, c.config.slider), null, 16, ["modelValue"]), F])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", z, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormNDSReturnId",
                type: "checkbox",
                "onUpdate:modelValue": t[10] || (t[10] = function(e) {
                    return c.calculatorForm.NDSReturn = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.NDSReturn]
            ]), Object(r["createElementVNode"])("label", T, Object(r["toDisplayString"])(e.$t("Возврат НДС")), 1)], 512), [
                [r["vShow"], o.showNDSReturnField]
            ]), Object(r["createElementVNode"])("div", C, [Object(r["createElementVNode"])("div", P, [Object(r["createElementVNode"])("label", A, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Возраст, лет")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.ages,
                modelValue: c.calculatorForm.age,
                "onUpdate:modelValue": t[11] || (t[11] = function(e) {
                    return c.calculatorForm.age = e
                })
            }, null, 8, ["items", "modelValue"])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", R, [Object(r["createElementVNode"])("label", U, Object(r["toDisplayString"])(e.$t("Объём двигателя")), 1), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", $, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.calculatorForm.engine,
                "onUpdate:modelValue": t[12] || (t[12] = function(e) {
                    return c.calculatorForm.engine = e
                })
            }, c.config.engine, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"])], 512), [
                [se, o.onClickOutside]
            ])], 512), [
                [r["vShow"], o.showEngineField]
            ])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", x, [Object(r["createElementVNode"])("label", I, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Аукционная площадка")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.platforms,
                modelValue: c.calculatorForm.platform,
                "onUpdate:modelValue": t[13] || (t[13] = function(e) {
                    return c.calculatorForm.platform = e
                })
            }, null, 8, ["items", "modelValue"])], 512), [
                [r["vShow"], o.showPlatformField]
            ]), Object(r["createElementVNode"])("div", B, [Object(r["createElementVNode"])("label", K, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Выбор аукциона")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.auctions,
                modelValue: c.calculatorForm.auction,
                "onUpdate:modelValue": t[14] || (t[14] = function(e) {
                    return c.calculatorForm.auction = e
                })
            }, null, 8, ["items", "modelValue"])]), Object(r["createElementVNode"])("div", M, [Object(r["createElementVNode"])("label", Z, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Доставка транспорта в")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.deliverys,
                modelValue: c.calculatorForm.deliveryTo,
                "onUpdate:modelValue": t[15] || (t[15] = function(e) {
                    return c.calculatorForm.deliveryTo = e
                })
            }, null, 8, ["items", "modelValue"])]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", L, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormDeliveryViaGermanyId",
                type: "checkbox",
                "onUpdate:modelValue": t[16] || (t[16] = function(e) {
                    return c.calculatorForm.deliveryViaGermany = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.deliveryViaGermany]
            ]), Object(r["createElementVNode"])("label", W, Object(r["toDisplayString"])(e.$t("Ввоз через Германию")), 1)], 512), [
                [r["vShow"], o.showDeliveryViaGermanyField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", G, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormDeliveryToHomeId",
                type: "checkbox",
                "onUpdate:modelValue": t[17] || (t[17] = function(e) {
                    return c.calculatorForm.deliveryToHome = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.deliveryToHome]
            ]), Object(r["createElementVNode"])("label", H, Object(r["toDisplayString"])(e.$t("Доставка на дом")), 1)], 512), [
                [r["vShow"], o.showDeliveryToHomeField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", X, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormRetroAutoId",
                type: "checkbox",
                "onUpdate:modelValue": t[18] || (t[18] = function(e) {
                    return c.calculatorForm.isRetroAuto = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.isRetroAuto]
            ]), Object(r["createElementVNode"])("label", Y, Object(r["toDisplayString"])(e.$t("Ретроавтомобиль (старше 30 лет)")), 1)], 512), [
                [r["vShow"], o.showRetroAutoField]
            ]), Object(r["createElementVNode"])("div", J, [Object(r["createElementVNode"])("div", q, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormIsElectroId",
                type: "checkbox",
                "onUpdate:modelValue": t[19] || (t[19] = function(e) {
                    return c.calculatorForm.isElectro = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.isElectro]
            ]), Object(r["createElementVNode"])("label", Q, Object(r["toDisplayString"])(e.$t("ЭЛЕКТРОМОБИЛЬ")), 1)]), Object(r["createElementVNode"])("div", ee, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormIsGibridlId",
                type: "checkbox",
                "onUpdate:modelValue": t[20] || (t[20] = function(e) {
                    return c.calculatorForm.isGibrid = e
                }),

                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.isGibrid]
            ]), Object(r["createElementVNode"])("label", te, Object(r["toDisplayString"])(e.$t("ГИБРИД")), 1)])]), Object(r["createElementVNode"])("div", le, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormIsSUVId",
                type: "checkbox",
                "onUpdate:modelValue": t[21] || (t[21] = function(e) {
                    return c.calculatorForm.isSUV = e
                }),

                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.isSUV]
            ]), Object(r["createElementVNode"])("label", re, Object(r["toDisplayString"])(e.$t("ВНЕДОРОЖНИК МИНИВЭН")), 1)]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", ae, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormIsConnectableGibridlId",
                type: "checkbox",
                "onUpdate:modelValue": t[22] || (t[22] = function(e) {
                    return c.calculatorForm.isConnectableGibrid = e
                }),

                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.isConnectableGibrid]
            ]), Object(r["createElementVNode"])("label", ce, Object(r["toDisplayString"])(e.$t("ПОДКЛЮЧАЕМЫЙ ГИБРИД")), 1)], 512), [
                [r["vShow"], o.showIsConnectableGibridField]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", oe, [Object(r["withDirectives"])(Object(r["createElementVNode"])("input", {
                id: "calculatorFormPreferentialId",
                type: "checkbox",
                "onUpdate:modelValue": t[23] || (t[23] = function(e) {
                    return c.calculatorForm.preferential = e
                }),
                class: "is-wm-calculator-calculator--line_checkbox"
            }, null, 512), [
                [r["vModelCheckbox"], c.calculatorForm.preferential]
            ]), Object(r["createElementVNode"])("label", ie, Object(r["toDisplayString"])(e.$t("РАСТАМОЖКА ДЛЯ ЛЬГОТНИКОВ")), 1)], 512), [
                [r["vShow"], o.showPreferentialField]
            ])])
        }
        l("b0c0");
        var se = ["value"],
            ue = ["label"],
            me = ["value", "disabled"],
            de = ["value", "disabled"];

        function be(e, t, l, a, c, o) {
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("select", {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_select",
                value: l.modelValue,
                onInput: t[0] || (t[0] = function(t) {
                    return e.$emit("update:modelValue", t.target.value)
                })
            }, [(Object(r["openBlock"])(!0), Object(r["createElementBlock"])(r["Fragment"], null, Object(r["renderList"])(l.items, (function(e) {
                return Object(r["openBlock"])(), Object(r["createElementBlock"])(r["Fragment"], {
                    key: e.key
                }, [e.options ? (Object(r["openBlock"])(), Object(r["createElementBlock"])("optgroup", {
                    key: 0,
                    label: e.name
                }, [(Object(r["openBlock"])(!0), Object(r["createElementBlock"])(r["Fragment"], null, Object(r["renderList"])(e.options, (function(e) {
                    return Object(r["openBlock"])(), Object(r["createElementBlock"])("option", {
                        value: e.key,
                        key: e.key,
                        disabled: o.isDisabledOption(e)
                    }, Object(r["toDisplayString"])(e.name), 9, me)
                })), 128))], 8, ue)) : (Object(r["openBlock"])(), Object(r["createElementBlock"])("option", {
                    value: e.key,
                    key: e.key,
                    disabled: o.isDisabledOption(e)
                }, Object(r["toDisplayString"])(e.name), 9, de))], 64)
            })), 128))], 40, se)
        }
        var Oe = {
                props: {
                    modelValue: String,
                    items: Array
                },
                methods: {
                    isDisabledOption: function(e) {
                        return !!(e.hideOnDeliveryTo && Array.isArray(e.hideOnDeliveryTo) && e.hideOnDeliveryTo.includes(this.$parent.calculatorForm.deliveryTo))
                    }
                },
                emits: ["update:modelValue"]
            },
            pe = l("6b0d"),
            je = l.n(pe);
        const he = je()(Oe, [
            ["render", be]
        ]);
        var we = he,
            ye = l("4971"),
            ve = l.n(ye),
            fe = {
                name: "CalculatorArea",
                props: {
                    lists: Object,
                    form: Object
                },
                components: {
                    Select: we,
                    VueSlider: ve.a
                },
                data: function() {
                    return {
                        config: {
                            money: {
                                precision: 0
                            },
                            engine: {
                                precision: 0
                            },
                            weight: {
                                precision: 0
                            },
                            length: {
                                precision: 1
                            },
                            slider: {
                                width: "auto",
                                height: 4,
                                min: 0,
                                max: 1e5,
                                interval: 1,
                                dotSize: 14,
                                tooltip: "none",
                                process: !0
                            },
                            sliderLength: {
                                width: "auto",
                                height: 4,
                                min: 0,
                                max: 100,
                                interval: .5,
                                dotSize: 14,
                                tooltip: "none",
                                process: !0
                            },
                            sliderWeight: {
                                width: "auto",
                                height: 4,
                                min: 0,
                                max: 1e4,
                                interval: 1,
                                dotSize: 14,
                                tooltip: "none",
                                process: !0
                            },
                            listsPlatforms: {
                                valueProp: "key",
                                trackBy: "name",
                                label: "name",
                                searchable: !0,
                                canClear: !1,
                                caret: !1
                            }
                        },
                        showAmountKeyboard: !1,
                        showEngineKeyboard: !1,
                        showWeightKeyboard: !1,
                        showLengthKeyboard: !1,
                        calculatorForm: {}
                    }
                },
                mounted: function() {
                    this.calculatorForm = this.form
                },
                computed: {
                    listsPlatforms: function() {
                        return this.lists.platforms.map((function(e) {
                            return {
                                value: e.key,
                                label: e.name
                            }
                        }))
                    },
                    showEngineField: function() {
                        return "trailer" !== this.calculatorForm.transport
                    },
                    showFuelField: function() {
                        return "pickup" === this.calculatorForm.transport
                    },
                    showWeightField: function() {
                        return "pickup" === this.calculatorForm.transport || "tricycle" === this.calculatorForm.transport || "hydrocycle" === this.calculatorForm.transport
                    },
                    showLengthField: function() {
                        return "boat" === this.calculatorForm.transport || "trailer-cottage" === this.calculatorForm.transport
                    },
                    showBoatTypeField: function() {
                        return "boat" === this.calculatorForm.transport
                    },
                    showPreferentialField: function() {
                        return "pl" !== this.calculatorForm.deliveryTo && "kz" !== this.calculatorForm.deliveryTo && "kz_as" !== this.calculatorForm.deliveryTo && "boat" !== this.calculatorForm.transport && "hydrocycle" !== this.calculatorForm.transport && "golf-cart" !== this.calculatorForm.transport
                    },
                    showDeliveryViaGermanyField: function() {
                        return !1
                    },
                    showRetroAutoField: function() {
                        return "pl" === this.calculatorForm.deliveryTo
                    },
                    showDeliveryToHomeField: function() {
                        return !1
                    },
                    showPlatformField: function() {
                        return "china" !== this.calculatorForm.auction && "korea" !== this.calculatorForm.auction && "oae" !== this.calculatorForm.auction && "belarus" !== this.calculatorForm.auction && "georgia" !== this.calculatorForm.auction && !1 === /_nl/i.test(this.calculatorForm.auction)
                    },
                    showTrailerWithBoatField: function() {
                        return "trailer" === this.calculatorForm.transport
                    },
                    showNDSReturnField: function() {
                        return this.isEuropeAuction
                    },
                    showIsConnectableGibridField: function() {
                        return this.calculatorForm.isGibrid
                    },
                    carPriceFieldLabel: function() {
                        return this.isEuropeAuction ? this.$i18n.t("Стоимость НЕТТО (Без НДС)") + ", $" : this.$i18n.t("Стоимость транспорта") + ", $"
                    },
                    isEuropeAuction: function() {
                        return /_eu_/i.test(this.calculatorForm.auction)
                    }
                },
                watch: {
                    "calculatorForm.isElectro": function(e) {
                        e && (this.calculatorForm.isGibrid = !1, this.calculatorForm.isRetroAuto = !1)
                    },
                    "calculatorForm.isGibrid": function(e) {
                        e && (this.calculatorForm.isElectro = !1, this.calculatorForm.isRetroAuto = !1)
                    },
                    "calculatorForm.isRetroAuto": function(e) {
                        e && (this.calculatorForm.isGibrid = !1, this.calculatorForm.isElectro = !1)
                    },
                    "calculatorForm.transport": function(e) {
                        this.calculatorForm.isSUV = "pickup" === e
                    }
                },
                methods: {
                    toggleKeyboard: function(e, t) {
                        this[e] = !this[e], this[e] && (this.calculatorForm[t] = 0)
                    },
                    onClickOutside: function(e) {
                        var t = e.target || e.currentTarget,
                            l = t.parentNode;
                        t.classList.contains("is-wm-calculator-calculator--line_field_add_button") || l.classList.contains("is-wm-calculator-calculator--line_field_add_button") || t.classList.contains("is-wm-calculator-fly-keyboard-digit") || (this.showAmountKeyboard = !1, this.showEngineKeyboard = !1, this.showWeightKeyboard = !1, this.showLengthKeyboard = !1)
                    },
                    onClickDigit: function(e) {
                        this.showAmountKeyboard ? this.calculatorForm.carPrice = "".concat(this.calculatorForm.carPrice).concat(e) : this.showEngineKeyboard ? this.calculatorForm.engine = "".concat(this.calculatorForm.engine).concat(e) : this.showWeightKeyboard ? this.calculatorForm.weight = "".concat(this.calculatorForm.weight).concat(e) : this.showLengthKeyboard && (this.calculatorForm.length = "".concat(this.calculatorForm.length).concat(e))
                    }
                }
            };
        const ge = je()(fe, [
            ["render", ne]
        ]);
        var Ve = ge,
            _e = {
                class: "is-wm-calculator-result"
            },
            Ne = {
                class: "is-wm-calculator-result_inner"
            },
            De = {
                class: "is-wm-calculator-result--header"
            },
            ke = {
                class: "is-wm-calculator-result--line"
            },
            Ee = {
                class: "is-wm-calculator-result--line_label"
            },
            Se = {
                class: "is-wm-calculator-result--line_value"
            },
            Fe = {
                class: "is-wm-calculator-result--line"
            },
            ze = {
                class: "is-wm-calculator-result--line_label"
            },
            Te = {
                class: "is-wm-calculator-result--line_value"
            },
            Ce = {
                class: "is-wm-calculator-result--line"
            },
            Pe = {
                class: "is-wm-calculator-result--line_label"
            },
            Ae = {
                class: "is-wm-calculator-result--line_value"
            },
            Re = {
                class: "is-wm-calculator-result--line"
            },
            Ue = {
                class: "is-wm-calculator-result--line_hint"
            },
            $e = {
                class: "is-wm-calculator-result--line"
            },
            xe = {
                class: "is-wm-calculator-result--line_label"
            },
            Ie = {
                class: "is-wm-calculator-result--line_value"
            },
            Be = {
                class: "is-wm-calculator-result--line"
            },
            Ke = {
                class: "is-wm-calculator-result--line_label"
            },
            Me = {
                class: "is-wm-calculator-result--line_value"
            },
            Ze = {
                class: "is-wm-calculator-result--line"
            },
            Le = {
                class: "is-wm-calculator-result--line_label"
            },
            We = {
                class: "is-wm-calculator-result--line_value"
            },
            Ge = {
                class: "is-wm-calculator-result--line"
            },
            He = {
                class: "is-wm-calculator-result--line_label"
            },
            Xe = {
                class: "is-wm-calculator-result--line_value"
            },
            Ye = {
                class: "is-wm-calculator-result--line"
            },
            Je = {
                class: "is-wm-calculator-result--line_label"
            },
            qe = {
                class: "is-wm-calculator-result--line_value"
            },
            Qe = {
                class: "is-wm-calculator-result--line"
            },
            et = {
                class: "is-wm-calculator-result--line_label"
            },
            tt = {
                class: "is-wm-calculator-result--line_value"
            },
            lt = {
                class: "is-wm-calculator-result--line"
            },
            rt = {
                class: "is-wm-calculator-result--line_label"
            },
            at = {
                class: "is-wm-calculator-result--line_value"
            },
            ct = {
                class: "is-wm-calculator-result--line"
            },
            ot = {
                class: "is-wm-calculator-result--line_label"
            },
            it = {
                class: "is-wm-calculator-result--line_value"
            },
            nt = {
                class: "is-wm-calculator-result--line"
            },
            st = {
                class: "is-wm-calculator-result--line_label"
            },
            ut = {
                class: "is-wm-calculator-result--line_value"
            },
            mt = {
                class: "is-wm-calculator-result--line"
            },
            dt = {
                class: "is-wm-calculator-result--line_label"
            },
            bt = {
                class: "is-wm-calculator-result--line_value"
            },
            Ot = {
                class: "is-wm-calculator-result--header"
            },
            pt = {
                class: "is-wm-calculator-result--line"
            },
            jt = {
                class: "is-wm-calculator-result--line_label"
            },
            ht = {
                class: "is-wm-calculator-result--line_value"
            },
            wt = {
                class: "is-wm-calculator-result--line"
            },
            yt = {
                class: "is-wm-calculator-result--line_label"
            },
            vt = {
                class: "is-wm-calculator-result--line_value"
            },
            ft = {
                class: "is-wm-calculator-result--line"
            },
            gt = {
                class: "is-wm-calculator-result--line_label"
            },
            Vt = {
                class: "is-wm-calculator-result--line_value"
            },
            _t = {
                class: "is-wm-calculator-result--line"
            },
            Nt = {
                class: "is-wm-calculator-result--line_label"
            },
            Dt = {
                class: "is-wm-calculator-result--line_value"
            },
            kt = {
                class: "is-wm-calculator-result--line"
            },
            Et = {
                class: "is-wm-calculator-result--line_label"
            },
            St = {
                class: "is-wm-calculator-result--line_value"
            },
            Ft = {
                class: "is-wm-calculator-result--line"
            },
            zt = {
                class: "is-wm-calculator-result--line_label"
            },
            Tt = {
                class: "is-wm-calculator-result--line_value"
            },
            Ct = {
                class: "is-wm-calculator-result--line"
            },
            Pt = {
                class: "is-wm-calculator-result--line_label"
            },
            At = {
                class: "is-wm-calculator-result--line_value"
            },
            Rt = {
                class: "is-wm-calculator-result--line"
            },
            Ut = {
                class: "is-wm-calculator-result--line_label"
            },
            $t = {
                class: "is-wm-calculator-result--line_value"
            },
            xt = {
                class: "is-wm-calculator-result--line"
            },
            It = {
                class: "is-wm-calculator-result--line_label"
            },
            Bt = {
                class: "is-wm-calculator-result--line_value"
            },
            Kt = {
                class: "is-wm-calculator-result--line"
            },
            Mt = {
                class: "is-wm-calculator-result--line_label"
            },
            Zt = {
                class: "is-wm-calculator-result--line_value"
            },
            Lt = {
                class: "is-wm-calculator-result--line"
            },
            Wt = {
                class: "is-wm-calculator-result--line_label"
            },
            Gt = {
                class: "is-wm-calculator-result--line_value"
            },
            Ht = {
                class: "is-wm-calculator-result--line"
            },
            Xt = {
                class: "is-wm-calculator-result--line_label"
            },
            Yt = {
                class: "is-wm-calculator-result--line_value"
            },
            Jt = {
                class: "is-wm-calculator-result--line"
            },
            qt = {
                class: "is-wm-calculator-result--line_label"
            },
            Qt = {
                class: "is-wm-calculator-result--line_value"
            },
            el = {
                class: "is-wm-calculator-result--line"
            },
            tl = {
                class: "is-wm-calculator-result--line_label"
            },
            ll = {
                class: "is-wm-calculator-result--line_value"
            },
            rl = {
                class: "is-wm-calculator-result--line"
            },
            al = {
                class: "is-wm-calculator-result--line_label"
            },
            cl = {
                class: "is-wm-calculator-result--line_value"
            },
            ol = {
                class: "is-wm-calculator-result--line"
            },
            il = {
                class: "is-wm-calculator-result--line_label"
            },
            nl = {
                class: "is-wm-calculator-result--line_value"
            },
            sl = {
                class: "is-wm-calculator-result--line_note"
            },
            ul = {
                class: "is-wm-calculator-result--line_note__gray"
            },
            ml = {
                class: "is-wm-calculator-result--footer"
            },
            dl = {
                class: "is-wm-calculator-result--footer_amount"
            },
            bl = {
                class: "is-wm-calculator-result--footer_amount_currency"
            },
            Ol = {
                class: "is-wm-calculator-result--footer_amount_decimal"
            },
            pl = {
                class: "is-wm-calculator-result--footer_button"
            },
            jl = Object(r["createElementVNode"])("i", {
                class: "is-wm-calculator-result--footer_button_icon"
            }, null, -1);

        function hl(e, t, l, a, c, o) {
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", _e, [Object(r["createElementVNode"])("div", Ne, [Object(r["createElementVNode"])("h3", De, Object(r["toDisplayString"])(e.$t("Покупка и доставка")), 1), Object(r["createElementVNode"])("div", ke, [Object(r["createElementVNode"])("div", Ee, Object(r["toDisplayString"])(o.carPriceFieldLabel), 1), Object(r["createElementVNode"])("div", Se, Object(r["toDisplayString"])(l.result.carPrice) + " " + Object(r["toDisplayString"])(l.result.carPrice_CUR), 1)]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Fe, [Object(r["createElementVNode"])("div", ze, Object(r["toDisplayString"])(e.$t("Расходы по возврату НДС")), 1), Object(r["createElementVNode"])("div", Te, Object(r["toDisplayString"])(l.result.carPriceNDSReturn) + " " + Object(r["toDisplayString"])(l.result.carPriceNDSReturn_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.carPriceNDSReturn && o.gtZero(l.result.carPriceNDSReturn)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ce, [Object(r["createElementVNode"])("div", Pe, Object(r["toDisplayString"])(e.$t("Аукционный сбор")), 1), Object(r["createElementVNode"])("div", Ae, Object(r["toDisplayString"])(l.result.auctionFee) + " " + Object(r["toDisplayString"])(l.result.auctionFee_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.auctionFee && o.gtZero(l.result.auctionFee)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Re, [Object(r["createElementVNode"])("div", Ue, Object(r["toDisplayString"])(e.$t("* Приведен ориентировочный расчет аукционного сбора, расчет нужно уточнить при ставке на каждый конкретный лот")), 1)], 512), [
                [r["vShow"], o.showAuctionFeeHint]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", $e, [Object(r["createElementVNode"])("div", xe, Object(r["toDisplayString"])(e.$t("Брокерская оплата и документооборот")), 1), Object(r["createElementVNode"])("div", Ie, Object(r["toDisplayString"])(l.result.BROKER_AND_DOCS) + " " + Object(r["toDisplayString"])(l.result.BROKER_AND_DOCS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.BROKER_AND_DOCS && o.gtZero(l.result.BROKER_AND_DOCS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Be, [Object(r["createElementVNode"])("div", Ke, Object(r["toDisplayString"])(e.$t("Транспортировка в порт США")), 1), Object(r["createElementVNode"])("div", Me, Object(r["toDisplayString"])(l.result.deliveryToPortUSA) + " " + Object(r["toDisplayString"])(l.result.deliveryToPortUSA_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.deliveryToPortUSA && o.gtZero(l.result.deliveryToPortUSA)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ze, [Object(r["createElementVNode"])("div", Le, Object(r["toDisplayString"])(o.deliveryFromFieldLabel), 1), Object(r["createElementVNode"])("div", We, Object(r["toDisplayString"])(l.result.deliveryFromPortUSA) + " " + Object(r["toDisplayString"])(l.result.deliveryFromPortUSA_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.deliveryFromPortUSA && o.gtZero(l.result.deliveryFromPortUSA)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ge, [Object(r["createElementVNode"])("div", He, Object(r["toDisplayString"])(o.AUTOVOZ_POTI_FieldLabel), 1), Object(r["createElementVNode"])("div", Xe, Object(r["toDisplayString"])(l.result.AUTOVOZ_POTI) + " " + Object(r["toDisplayString"])(l.result.AUTOVOZ_POTI_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.AUTOVOZ_POTI && o.gtZero(l.result.AUTOVOZ_POTI)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ye, [Object(r["createElementVNode"])("div", Je, Object(r["toDisplayString"])(o.fromKlaipeda_FieldLabel), 1), Object(r["createElementVNode"])("div", qe, Object(r["toDisplayString"])(l.result.fromKlaipeda) + " " + Object(r["toDisplayString"])(l.result.fromKlaipeda_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.fromKlaipeda && o.gtZero(l.result.fromKlaipeda)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Qe, [Object(r["createElementVNode"])("div", et, Object(r["toDisplayString"])(e.$t("Доставка на дом")), 1), Object(r["createElementVNode"])("div", tt, Object(r["toDisplayString"])(l.result.deliveryToHomeFee) + " " + Object(r["toDisplayString"])(l.result.deliveryToHomeFee_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.deliveryToHomeFee && o.gtZero(l.result.deliveryToHomeFee)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", lt, [Object(r["createElementVNode"])("div", rt, Object(r["toDisplayString"])(e.$t("Стоимость экспресс-оплаты в США")), 1), Object(r["createElementVNode"])("div", at, Object(r["toDisplayString"])(l.result.USA_EXPRESS_PAY_COST) + " " + Object(r["toDisplayString"])(l.result.USA_EXPRESS_PAY_COST_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.USA_EXPRESS_PAY_COST && o.gtZero(l.result.USA_EXPRESS_PAY_COST)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", ct, [Object(r["createElementVNode"])("div", ot, Object(r["toDisplayString"])(e.$t("Высылка документов")), 1), Object(r["createElementVNode"])("div", it, Object(r["toDisplayString"])(l.result.SEND_DOCS) + " " + Object(r["toDisplayString"])(l.result.SEND_DOCS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.SEND_DOCS && o.gtZero(l.result.SEND_DOCS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", nt, [Object(r["createElementVNode"])("div", st, Object(r["toDisplayString"])(e.$t("Экспедиторский сбор")), 1), Object(r["createElementVNode"])("div", ut, Object(r["toDisplayString"])(l.result.EXPEDITION_FEE) + " " + Object(r["toDisplayString"])(l.result.EXPEDITION_FEE_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.EXPEDITION_FEE && o.gtZero(l.result.EXPEDITION_FEE)]
            ]), 
            
            Object(r["withDirectives"])(Object(r["createElementVNode"])("div", mt, [Object(r["createElementVNode"])
            ("div", dt, Object(r["toDisplayString"])(e.$t("Стоимость наших услуг")), 1), Object(r["createElementVNode"])("div", bt, Object(r["toDisplayString"])
            (l.result.ourServicePrice) + " " + Object(r["toDisplayString"])(l.result.ourServicePrice_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.ourServicePrice && o.gtZero(l.result.ourServicePrice)]
                
            ]), Object(r["createElementVNode"])("h3", Ot, Object(r["toDisplayString"])(e.$t("Растаможка и оформление")), 1), Object(r["createElementVNode"])("div", pt, [Object(r["createElementVNode"])("div", jt, Object(r["toDisplayString"])(e.$t("Таможенная пошлина")), 1), Object(r["createElementVNode"])("div", ht, Object(r["toDisplayString"])(l.result.customDuty) + " " + Object(r["toDisplayString"])(l.result.customDuty_CUR), 1)]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", wt, [Object(r["createElementVNode"])("div", yt, Object(r["toDisplayString"])(o.customFeeFieldLabel), 1), Object(r["createElementVNode"])("div", vt, Object(r["toDisplayString"])(l.result.customFee) + " " + Object(r["toDisplayString"])(l.result.customFee_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.customFee && o.gtZero(l.result.customFee)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", ft, [Object(r["createElementVNode"])("div", gt, Object(r["toDisplayString"])(e.$t("Утилизационный сбор")), 1), Object(r["createElementVNode"])("div", Vt, Object(r["toDisplayString"])(l.result.junkFee) + " " + Object(r["toDisplayString"])(l.result.junkFee_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.junkFee && o.gtZero(l.result.junkFee)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", _t, [Object(r["createElementVNode"])("div", Nt, Object(r["toDisplayString"])(e.$t("Акцизный сбор")), 1), Object(r["createElementVNode"])("div", Dt, Object(r["toDisplayString"])(l.result.AKCIZ) + " " + Object(r["toDisplayString"])(l.result.AKCIZ_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.AKCIZ && o.gtZero(l.result.AKCIZ)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", kt, [Object(r["createElementVNode"])("div", Et, Object(r["toDisplayString"])(e.$t("Операционный сбор")), 1), Object(r["createElementVNode"])("div", St, Object(r["toDisplayString"])(l.result.OP_SBOR) + " " + Object(r["toDisplayString"])(l.result.OP_SBOR_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.OP_SBOR && o.gtZero(l.result.OP_SBOR)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ft, [Object(r["createElementVNode"])("div", zt, Object(r["toDisplayString"])(e.$t("НДС")), 1), Object(r["createElementVNode"])("div", Tt, Object(r["toDisplayString"])(l.result.NDS) + " " + Object(r["toDisplayString"])(l.result.NDS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.NDS && o.gtZero(l.result.NDS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ct, [Object(r["createElementVNode"])("div", Pt, Object(r["toDisplayString"])(e.$t("Сертификат")), 1), Object(r["createElementVNode"])("div", At, Object(r["toDisplayString"])(l.result.CERTIFICATE) + " " + Object(r["toDisplayString"])(l.result.CERTIFICATE_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.CERTIFICATE && o.gtZero(l.result.CERTIFICATE)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Rt, [Object(r["createElementVNode"])("div", Ut, Object(r["toDisplayString"])(e.$t("По данным электронной таможенной службы")), 1), Object(r["createElementVNode"])("div", $t, Object(r["toDisplayString"])(l.result.EL_TAM_DEPT) + " " + Object(r["toDisplayString"])(l.result.EL_TAM_DEPT_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.EL_TAM_DEPT && o.gtZero(l.result.EL_TAM_DEPT)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", xt, [Object(r["createElementVNode"])("div", It, Object(r["toDisplayString"])(e.$t("НДС за электронные таможенные услуги")), 1), Object(r["createElementVNode"])("div", Bt, Object(r["toDisplayString"])(l.result.EL_TAM_DEPT_NDS) + " " + Object(r["toDisplayString"])(l.result.EL_TAM_DEPT_NDS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.EL_TAM_DEPT_NDS && o.gtZero(l.result.EL_TAM_DEPT_NDS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Kt, [Object(r["createElementVNode"])("div", Mt, Object(r["toDisplayString"])(e.$t("Расходы на СВХ")), 1), Object(r["createElementVNode"])("div", Zt, Object(r["toDisplayString"])(l.result.svxServicePrice) + " " + Object(r["toDisplayString"])(l.result.svxServicePrice_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.svxServicePrice && o.gtZero(l.result.svxServicePrice)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Lt, [Object(r["createElementVNode"])("div", Wt, Object(r["toDisplayString"])(e.$t("СБКТС и ГЛОНАСС (ЭВАК)")), 1), Object(r["createElementVNode"])("div", Gt, Object(r["toDisplayString"])(l.result.SBKTS) + " " + Object(r["toDisplayString"])(l.result.SBKTS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.SBKTS && o.gtZero(l.result.SBKTS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Ht, [Object(r["createElementVNode"])("div", Xt, Object(r["toDisplayString"])(e.$t("Эвакуатор")), 1), Object(r["createElementVNode"])("div", Yt, Object(r["toDisplayString"])(l.result.EVAKUATOR) + " " + Object(r["toDisplayString"])(l.result.EVAKUATOR_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.EVAKUATOR && o.gtZero(l.result.EVAKUATOR)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", Jt, [Object(r["createElementVNode"])("div", qt, Object(r["toDisplayString"])(e.$t("Первичная регистрация")), 1), Object(r["createElementVNode"])("div", Qt, Object(r["toDisplayString"])(l.result.UCHET) + " " + Object(r["toDisplayString"])(l.result.UCHET_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.UCHET && o.gtZero(l.result.UCHET)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", el, [Object(r["createElementVNode"])("div", tl, Object(r["toDisplayString"])(e.$t("Оформление документов")), 1), Object(r["createElementVNode"])("div", ll, Object(r["toDisplayString"])(l.result.DOCS) + " " + Object(r["toDisplayString"])(l.result.DOCS_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.DOCS && o.gtZero(l.result.DOCS)]
            ]), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", rl, [Object(r["createElementVNode"])("div", al, Object(r["toDisplayString"])(e.$t("Получение ПТС РФ")), 1), Object(r["createElementVNode"])("div", cl, Object(r["toDisplayString"])(l.result.ptsRFPrice) + " " + Object(r["toDisplayString"])(l.result.ptsRFPrice_CUR), 1)], 512), [
                [r["vShow"], null !== l.result.ptsRFPrice && o.gtZero(l.result.ptsRFPrice)]
            ]), Object(r["createElementVNode"])("div", ol, [Object(r["createElementVNode"])("div", il, Object(r["toDisplayString"])(e.$t("ИТОГО")) + " " + Object(r["toDisplayString"])(l.result.resultPrice_HINT), 1), Object(r["createElementVNode"])("div", nl, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(l.result.resultPrice) + " " + Object(r["toDisplayString"])(l.result.resultPrice_CUR) + " ", 1), Object(r["withDirectives"])(Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-result--line_value_other_valute"
            }, Object(r["toDisplayString"])(l.result.resultPriceOtherValute) + " " + Object(r["toDisplayString"])(l.result.resultPriceOtherValute_CUR), 513), [
                [r["vShow"], null !== l.result.resultPriceOtherValute && o.gtZero(l.result.resultPriceOtherValute)]
            ])])]), (Object(r["openBlock"])(!0), Object(r["createElementBlock"])(r["Fragment"], null, Object(r["renderList"])(o.additionalMessagesBeforeTotal, (function(t, l) {
                return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", {
                    class: "is-wm-calculator-result--line",
                    key: l
                }, [Object(r["createElementVNode"])("div", sl, Object(r["toDisplayString"])(e.$t(t)), 1)])
            })), 128)), (Object(r["openBlock"])(!0), Object(r["createElementBlock"])(r["Fragment"], null, Object(r["renderList"])(o.additionalMessagesBeforeTotalInGray, (function(t, l) {
                return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", {
                    class: "is-wm-calculator-result--line",
                    key: l
                }, [Object(r["createElementVNode"])("div", ul, Object(r["toDisplayString"])(e.$t(t)), 1)])
            })), 128))]), Object(r["createElementVNode"])("div", ml, [Object(r["createElementVNode"])("div", dl, [Object(r["createElementVNode"])("span", bl, Object(r["toDisplayString"])(l.result.resultPrice_CUR), 1), Object(r["createTextVNode"])(" " + Object(r["toDisplayString"])(o.resultPricePartOne) + " ", 1), Object(r["createElementVNode"])("span", Ol, "." + Object(r["toDisplayString"])(o.resultPricePartTwo), 1)]), Object(r["createElementVNode"])("div", pl, [Object(r["createElementVNode"])("button", {
                onClick: t[0] || (t[0] = function(e) {
                    return o.toggleCreditArea()
                })
            }, [jl, Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Рассчитать кредит")), 1)])])])])
        }
        l("d3b7"), l("25f0"), l("ac1f"), l("1276");
        var wl = {
            name: "ResultArea",
            props: {
                lists: Object,
                form: Object,
                result: Object
            },
            computed: {
                isNeedBremerhafenMessageShow: function() {
                    return "pl" === this.$i18n.locale || "pl" === this.form.deliveryTo
                },
                additionalMessagesBeforeTotal: function() {
                    return window.wmCalculatorDefaults.additionalMessagesBeforeTotal || []
                },
                additionalMessagesBeforeTotalInGray: function() {
                    return window.wmCalculatorDefaults.additionalMessagesBeforeTotalInGray || []
                },
                deliveryCityName: function() {
                    var e = this,
                        t = this.lists.deliverys.filter((function(t) {
                            return t.key === e.form.deliveryTo
                        }));
                    return this.$i18n.t(t.length && t[0].cityName || "")
                },
                resultPricePartOne: function() {
                    var e = this.result.resultPrice.toString() || "0.00",
                        t = e.split(".");
                    return t[0] || "0"
                },
                resultPricePartTwo: function() {
                    var e = this.result.resultPrice.toString() || "0.00",
                        t = e.split(".");
                    return t[1] || "00"
                },
                carPriceFieldLabel: function() {
                    return /_eu_/i.test(this.form.auction) ? this.$i18n.t("Стоимость НЕТТО (Без НДС)") : this.$i18n.t("Стоимость транспорта")
                },
                isEuropeAuction: function() {
                    return /_eu_/i.test(this.form.auction)
                },
                isAzianAuction: function() {
                    return /(china|korea)/i.test(this.form.auction)
                },
                deliveryFromFieldLabel: function() {
                    return this.isEuropeAuction || this.isAzianAuction ? this.$i18n.t("Доставка") : "pl" === this.form.deliveryTo ? this.$i18n.t("Доставка по морю + доставка в порт EU") : "kz" === this.form.deliveryTo || "kz_as" === this.form.deliveryTo ? this.$i18n.t("Доставка транспорта в") + " ".concat(this.deliveryCityName) : this.$i18n.t("Доставка от порта до") + " ".concat(this.deliveryCityName)
                },
                AUTOVOZ_POTI_FieldLabel: function() {
                    var e = "";
                    return "kz" === this.form.deliveryTo ? e = this.$i18n.t("Алматы") : "kz_as" === this.form.deliveryTo ? e = this.$i18n.t("Астана") : "az" === this.form.deliveryTo ? e = this.$i18n.t("Баку") : "uz" === this.form.deliveryTo ? e = this.$i18n.t("Ташкент") : "kg" === this.form.deliveryTo && (e = this.$i18n.t("Бишкек")), this.$i18n.t("Автовоз Поти-") + e
                },
                fromKlaipeda_FieldLabel: function() {
                    var e = "";
                    return "ru" === this.form.deliveryTo ? e = this.$i18n.t("Москвы") : "ru_spb" === this.form.deliveryTo ? e = this.$i18n.t("Санкт-Петербурга") : "ru_krd" === this.form.deliveryTo && (e = this.$i18n.t("Краснодара")), this.$i18n.t("Доставка от Клайпеды до ") + e
                },
                customFeeFieldLabel: function() {
                    return "kz" === this.form.deliveryTo || "kz_as" === this.form.deliveryTo ? this.$i18n.t("Таможенная декларация") : this.$i18n.t("Таможенный сбор")
                },
                showAuctionFeeHint: function() {
                    return null !== this.result.auctionFee && this.gtZero(this.result.auctionFee) && this.isEuropeAuction
                }
            },
            methods: {
                gtZero: function(e) {
                    return parseFloat(e) > 0
                },
                toggleCreditArea: function() {
                    this.$emit("toggleCreditArea")
                }
            }
        };
        const yl = je()(wl, [
            ["render", hl]
        ]);
        var vl = yl,
            fl = {
                class: "is-wm-calculator-calculator"
            },
            gl = {
                class: "is-wm-calculator-calculator--line"
            },
            Vl = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            _l = {
                class: "is-wm-calculator-calculator--line"
            },
            Nl = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            Dl = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            kl = Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-calculator--line_field_hint"
            }, [Object(r["createElementVNode"])("span", null, "0 $"), Object(r["createElementVNode"])("span", null, "100 000 $")], -1),
            El = {
                class: "is-wm-calculator-calculator--line"
            },
            Sl = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            Fl = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            zl = Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-calculator--line_field_hint"
            }, [Object(r["createElementVNode"])("span", null, "0 мес"), Object(r["createElementVNode"])("span", null, "84 мес")], -1),
            Tl = {
                class: "is-wm-calculator-calculator--line"
            },
            Cl = {
                for: "",
                class: "is-wm-calculator-calculator--line_label"
            },
            Pl = {
                class: "is-wm-calculator-calculator--line_field_wrap"
            },
            Al = Object(r["createElementVNode"])("div", {
                class: "is-wm-calculator-calculator--line_field_hint"
            }, [Object(r["createElementVNode"])("span", null, "0 $"), Object(r["createElementVNode"])("span", null, "100 000 $")], -1);

        function Rl(e, t, l, a, c, o) {
            var i = Object(r["resolveComponent"])("font-awesome-icon"),
                n = Object(r["resolveComponent"])("Select"),
                s = Object(r["resolveComponent"])("money3"),
                u = Object(r["resolveComponent"])("vue-slider");
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", fl, [Object(r["createElementVNode"])("div", gl, [Object(r["createElementVNode"])("label", Vl, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Цель кредита")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createVNode"])(n, {
                items: l.lists.creditPurpose,
                modelValue: c.creditForm.purpose,
                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                    return c.creditForm.purpose = e
                })
            }, null, 8, ["items", "modelValue"])]), Object(r["createElementVNode"])("div", _l, [Object(r["createElementVNode"])("label", Nl, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Стоимость")) + " " + Object(r["toDisplayString"])(o.purposeTransportName) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", Dl, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.creditForm.price,
                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                    return c.creditForm.price = e
                })
            }, c.config.price, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(u, Object(r["mergeProps"])({
                modelValue: c.creditForm.price,
                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                    return c.creditForm.price = e
                })
            }, c.config.sliderPrice), null, 16, ["modelValue"]), kl])]), Object(r["createElementVNode"])("div", El, [Object(r["createElementVNode"])("label", Sl, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Срок кредита")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", Fl, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.creditForm.time,
                "onUpdate:modelValue": t[3] || (t[3] = function(e) {
                    return c.creditForm.time = e
                })
            }, c.config.time, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(u, Object(r["mergeProps"])({
                modelValue: c.creditForm.time,
                "onUpdate:modelValue": t[4] || (t[4] = function(e) {
                    return c.creditForm.time = e
                })
            }, c.config.sliderTime), null, 16, ["modelValue"]), zl])]), Object(r["createElementVNode"])("div", Tl, [Object(r["createElementVNode"])("label", Cl, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("Первоначальный взнос")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", Pl, [Object(r["createVNode"])(s, Object(r["mergeProps"])({
                modelValue: c.creditForm.firstFee,
                "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                    return c.creditForm.firstFee = e
                })
            }, c.config.price, {
                class: "is-wm-calculator-calculator--line_field is-wm-calculator-calculator--line_input"
            }), null, 16, ["modelValue"]), Object(r["createVNode"])(u, Object(r["mergeProps"])({
                modelValue: c.creditForm.firstFee,
                "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                    return c.creditForm.firstFee = e
                })
            }, c.config.sliderPrice), null, 16, ["modelValue"]), Al])])])
        }
        var Ul = {
            name: "CreditCalculatorArea",
            props: {
                lists: Object,
                calculatorForm: Object,
                form: Object
            },
            components: {
                Select: we,
                VueSlider: ve.a
            },
            data: function() {
                return {
                    config: {
                        price: {
                            precision: 0,
                            suffix: " $"
                        },
                        time: {
                            precision: 0,
                            suffix: " мес"
                        },
                        sliderPrice: {
                            width: "auto",
                            height: 4,
                            min: 0,
                            max: 1e5,
                            interval: 1,
                            dotSize: 14,
                            tooltip: "none",
                            process: !0
                        },
                        sliderTime: {
                            width: "auto",
                            height: 4,
                            min: 0,
                            max: 84,
                            interval: 1,
                            dotSize: 14,
                            tooltip: "none",
                            process: !0
                        }
                    },
                    showPriceKeyboard: !1,
                    showTimeKeyboard: !1,
                    showFirstFeeKeyboard: !1,
                    creditForm: {}
                }
            },
            mounted: function() {
                this.creditForm = this.form
            },
            computed: {
                purposeTransportName: function() {
                    var e = this;
                    if (!this.lists.creditPurpose) return "";
                    var t = this.lists.creditPurpose.filter((function(t) {
                        return t.key === e.form.purpose
                    }));
                    return t.length && t[0].label || ""
                }
            },
            watch: {},
            methods: {
                toggleKeyboard: function(e, t) {
                    this[e] = !this[e], this[e] && (this.creditForm[t] = 0)
                },
                onClickOutside: function(e) {
                    var t = e.target || e.currentTarget,
                        l = t.parentNode;
                    t.classList.contains("is-wm-calculator-calculator--line_field_add_button") || l.classList.contains("is-wm-calculator-calculator--line_field_add_button") || t.classList.contains("is-wm-calculator-fly-keyboard-digit") || (this.showPriceKeyboard = !1, this.showTimeKeyboard = !1, this.showFirstFeeKeyboard = !1)
                },
                onClickDigit: function(e) {
                    this.showPriceKeyboard ? this.creditForm.price = "".concat(this.creditForm.price).concat(e) : this.showTimeKeyboard ? this.creditForm.time = "".concat(this.creditForm.time).concat(e) : this.showFirstFeeKeyboard && (this.creditForm.firstFee = "".concat(this.creditForm.firstFee).concat(e))
                }
            }
        };
        const $l = je()(Ul, [
            ["render", Rl]
        ]);
        var xl = $l,
            Il = {
                class: "is-wm-calculator-result"
            },
            Bl = {
                class: "is-wm-calculator-result_inner"
            },
            Kl = {
                class: "is-wm-calculator-result--header"
            },
            Ml = {
                class: "is-wm-calculator-result--line"
            },
            Zl = {
                class: "is-wm-calculator-result--line_label"
            },
            Ll = {
                class: "is-wm-calculator-result--line_value"
            },
            Wl = {
                class: "is-wm-calculator-result--line"
            },
            Gl = {
                class: "is-wm-calculator-result--line_label"
            },
            Hl = {
                class: "is-wm-calculator-result--line_value"
            },
            Xl = {
                class: "is-wm-calculator-result--line"
            },
            Yl = {
                class: "is-wm-calculator-result--line_label"
            },
            Jl = {
                class: "is-wm-calculator-result--line_value"
            },
            ql = {
                class: "is-wm-calculator-result--line"
            },
            Ql = {
                class: "is-wm-calculator-result--line_label"
            },
            er = {
                class: "is-wm-calculator-result--line_value"
            },
            tr = {
                class: "is-wm-calculator-result--line"
            },
            lr = {
                class: "is-wm-calculator-result--line_label"
            },
            rr = {
                class: "is-wm-calculator-result--line_value"
            },
            ar = {
                class: "is-wm-calculator-result--footer"
            },
            cr = {
                class: "is-wm-calculator-result--footer_amount"
            },
            or = Object(r["createElementVNode"])("span", {
                class: "is-wm-calculator-result--footer_amount_currency"
            }, "$", -1),
            ir = {
                class: "is-wm-calculator-result--footer_amount_decimal"
            },
            nr = Object(r["createElementVNode"])("div", null, " ", -1);

        function sr(e, t, l, a, c, o) {
            var i = Object(r["resolveComponent"])("font-awesome-icon");
            return Object(r["openBlock"])(), Object(r["createElementBlock"])("div", Il, [Object(r["createElementVNode"])("div", Bl, [Object(r["createElementVNode"])("h3", Kl, Object(r["toDisplayString"])(e.$t("Расчет кредита")), 1), Object(r["createElementVNode"])("div", Ml, [Object(r["createElementVNode"])("div", Zl, Object(r["toDisplayString"])(e.$t("Цель кредита")), 1), Object(r["createElementVNode"])("div", Ll, Object(r["toDisplayString"])(o.purposeName), 1)]), Object(r["createElementVNode"])("div", Wl, [Object(r["createElementVNode"])("div", Gl, Object(r["toDisplayString"])(e.$t("Стоимость")) + " " + Object(r["toDisplayString"])(o.purposeTransportName), 1), Object(r["createElementVNode"])("div", Hl, Object(r["toDisplayString"])(o.asCurrency(l.form.price)) + " $", 1)]), Object(r["createElementVNode"])("div", Xl, [Object(r["createElementVNode"])("div", Yl, Object(r["toDisplayString"])(e.$t("Срок кредита")), 1), Object(r["createElementVNode"])("div", Jl, Object(r["toDisplayString"])(l.form.time) + " мес.", 1)]), Object(r["createElementVNode"])("div", ql, [Object(r["createElementVNode"])("div", Ql, Object(r["toDisplayString"])(e.$t("Первоначальный взнос")), 1), Object(r["createElementVNode"])("div", er, Object(r["toDisplayString"])(o.asCurrency(l.form.firstFee)) + " $", 1)]), Object(r["createElementVNode"])("div", tr, [Object(r["createElementVNode"])("div", lr, [Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("ИТОГО")) + " ", 1), Object(r["createVNode"])(i)]), Object(r["createElementVNode"])("div", rr, Object(r["toDisplayString"])(o.asCurrency(l.creditResult.fullAmount)) + " $", 1)])]), Object(r["createElementVNode"])("div", ar, [Object(r["createElementVNode"])("div", cr, [or, Object(r["createTextVNode"])(" " + Object(r["toDisplayString"])(o.resultPricePartOne) + " ", 1), Object(r["createElementVNode"])("span", ir, "." + Object(r["toDisplayString"])(o.resultPricePartTwo), 1)]), nr])])
        }
        l("5319"), l("b680");
        var ur = {
            name: "CreditResultArea",
            props: {
                lists: Object,
                calculatorForm: Object,
                calculatorResult: Object,
                creditResult: Object,
                form: Object
            },
            computed: {
                purposeTransportName: function() {
                    var e = this;
                    if (!this.lists.creditPurpose) return "";
                    var t = this.lists.creditPurpose.filter((function(t) {
                        return t.key === e.form.purpose
                    }));
                    return t.length && t[0].label || ""
                },
                purposeName: function() {
                    var e = this;
                    if (!this.lists.creditPurpose) return "";
                    var t = this.lists.creditPurpose.filter((function(t) {
                        return t.key === e.form.purpose
                    }));
                    return (t.length && t[0].name || "").toUpperCase()
                },
                resultPricePartOne: function() {
                    var e = this.asCurrency(this.creditResult.fullAmount) || "0.00",
                        t = e.split(".");
                    return t[0] || "0"
                },
                resultPricePartTwo: function() {
                    var e = this.asCurrency(this.creditResult.fullAmount) || "0.00",
                        t = e.split(".");
                    return t[1] || "00"
                }
            },
            methods: {
                asCurrency: function(e) {
                    return parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
            }
        };
        const mr = je()(ur, [
            ["render", sr]
        ]);
        var dr = mr,
            br = l("2be4"),
            Or = l("2ef0"),
            pr = l.n(Or),
            jr = "https://old.westmotors.by/themes/autousa/is/wm-calculator/calculator/api",
            hr = {
                getPlatforms: function() {
                    var e = arguments;
                    return Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var l, r, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return l = e.length > 0 && void 0 !== e[0] ? e[0] : "", t.next = 3, fetch("".concat(jr, "/getPlatforms.php?auction=").concat(l));
                                case 3:
                                    return r = t.sent, t.next = 6, r.json();
                                case 6:
                                    return a = t.sent, t.abrupt("return", a);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                doCalculate: function(e) {
                    return Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var l, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, fetch("".concat(jr, "/doCalculate.php"), {
                                        method: "POST",
                                        cache: "no-cache",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(e)
                                    });
                                case 2:
                                    return l = t.sent, t.next = 5, l.json();
                                case 5:
                                    return r = t.sent, t.abrupt("return", r);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            wr = {
                name: "App",
                components: {
                    CalculatorArea: Ve,
                    ResultArea: vl,
                    CreditCalculatorArea: xl,
                    CreditResultArea: dr
                },
                data: function() {
                    return {
                        lists: br,
                        calculatorForm: {
                            transport: null,
                            platform: null,
                            auction: null,
                            deliveryTo: null,
                            carPrice: 3e3,
                            year: null,
                            age: null,
                            engine: 2e3,
                            preferential: !1,
                            isElectro: !1,
                            isGibrid: !1,
                            isSUV: !1,
                            isConnectableGibrid: !1,
                            fuel: null,
                            weight: 0,
                            length: 0,
                            boatType: null,
                            trailerWithBoat: !0,
                            NDSReturn: !1,
                            deliveryViaGermany: !0,
                            isRetroAuto: !1,
                            deliveryToHome: !1
                        },
                        calculatorResult: {
                            carPrice: 0,
                            resultPrice: 0
                        },
                        creditForm: {
                            purpose: null,
                            price: 0,
                            time: 12,
                            firstFee: 0
                        },
                        creditResult: {
                            fullAmount: 0,
                            monthAmount: 0
                        },
                        showCreditArea: !1
                    }
                },
                computed: {
                    generateYears: function() {
                        for (var e = [], t = 2021; t > 1950; t -= 1) e.push({
                            key: t,
                            name: t
                        });
                        return e
                    },
                    generateAges: function() {
                        var e = [];
                        e.push({
                            key: 0,
                            name: this.$i18n.t("Менее года")
                        });
                        for (var t = 1; t <= 15; t += 1) e.push({
                            key: t,
                            name: t
                        });
                        return e.push({
                            key: 16,
                            name: this.$i18n.t("Более") + " 15"
                        }), e
                    },
                    calculatorFormAuction: function() {
                        return this.calculatorForm.auction
                    }
                },
                methods: {
                    onCalculatorFormChange: pr.a.debounce(function() {
                        var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, l) {
                            var r, a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, r = null, a = !1, !t.deliveryTo) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, hr.doCalculate(t);
                                    case 6:
                                        r = e.sent, a = r.success || !1, console.log(r);
                                    case 9:
                                        a && (this.calculatorResult = r.data || null, this.creditForm.purpose = this.calculatorForm.transport || "auto", this.creditForm.price = this.calculatorResult.resultPriceInt || 0, this.creditForm.firstFee = parseInt(.1 * this.creditForm.price)), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e["catch"](0), console.error(e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 12]
                            ])
                        })));
                        return function(t, l) {
                            return e.apply(this, arguments)
                        }
                    }(), 100),
                    onCreditCalculatorFormChange: function(e) {
                        var t = .19,
                            l = t / 12,
                            r = l * Math.pow(1 + l, this.creditForm.time) / (Math.pow(1 + l, this.creditForm.time) - 1),
                            a = this.creditForm.price - this.creditForm.firstFee,
                            c = a * r,
                            o = c * this.creditForm.time;
                        this.creditResult = {
                            fullAmount: Number.isFinite(o) ? o : 0,
                            monthAmount: Number.isFinite(c) ? c : 0
                        }, console.log(this.creditResult)
                    },
                    getPlatforms: function() {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, hr.getPlatforms(e.calculatorForm.auction);
                                    case 3:
                                        e.lists.platforms = t.sent, e.calculatorForm.platform = e.lists.platforms[0].key || null, t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    toggleCrediteArea: function() {
                        this.showCreditArea = !this.showCreditArea
                    }
                },
                watch: {
                    calculatorForm: {
                        handler: function(e, t) {
                            this.onCalculatorFormChange(e, t)
                        },
                        deep: !0
                    },
                    calculatorFormAuction: function() {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getPlatforms();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    creditForm: {
                        handler: function(e) {
                            this.onCreditCalculatorFormChange(e)
                        },
                        deep: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var l, r, a, c;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getPlatforms();
                                case 2:
                                    e.lists.ages = e.generateAges, e.lists.creditPurpose = e.lists.transports.map((function(t) {
                                        return {
                                            key: t.key,
                                            name: e.$i18n.t("Покупка") + " ".concat(t.nameWhat),
                                            label: t.nameWhat
                                        }
                                    })), e.calculatorForm.transport = e.lists.transports[0].key || null, e.calculatorForm.auction = e.lists.auctions[0].options[0].key || null, e.calculatorForm.deliveryTo = e.lists.deliverys[0].key || null, e.calculatorForm.age = e.lists.ages[1].key || null, e.calculatorForm.fuel = e.lists.fuel[0].key || null, e.calculatorForm.boatType = e.lists.boatType[0].key || null, e.creditForm.purpose = e.lists.creditPurpose[0].key || null, window.wmCalculatorDefaults.transport && e.lists.transports.map((function(e) {
                                        return e.key
                                    })).includes(window.wmCalculatorDefaults.transport) && (e.calculatorForm.transport = window.wmCalculatorDefaults.transport), window.wmCalculatorDefaults.price && (e.calculatorForm.carPrice = window.wmCalculatorDefaults.price), window.wmCalculatorDefaults.engine && (e.calculatorForm.engine = window.wmCalculatorDefaults.engine), window.wmCalculatorDefaults.preferential && (e.calculatorForm.preferential = window.wmCalculatorDefaults.preferential), window.wmCalculatorDefaults.year && window.wmCalculatorDefaults.year > 0 && (l = new Date, r = l.getFullYear(), a = r - window.wmCalculatorDefaults.year, console.log(r, a), e.calculatorForm.age = a > 15 ? 16 : a), window.wmCalculatorDefaults.auctionGroupFilter && Array.isArray(window.wmCalculatorDefaults.auctionGroupFilter) && (e.lists.auctions = e.lists.auctions.filter((function(e) {
                                        return window.wmCalculatorDefaults.auctionGroupFilter.includes(e.key)
                                    }))), c = e.lists.auctions.reduce((function(e, t) {
                                        return e.concat(t.options.map((function(e) {
                                            return e.key
                                        })))
                                    }), []), window.wmCalculatorDefaults.auction && c.includes(window.wmCalculatorDefaults.auction) && (e.calculatorForm.auction = window.wmCalculatorDefaults.auction), window.wmCalculatorDefaults.onlyDeliveries && Array.isArray(window.wmCalculatorDefaults.onlyDeliveries) && window.wmCalculatorDefaults.onlyDeliveries.length > 0 && (e.lists.deliverys = e.lists.deliverys.filter((function(e) {
                                        return window.wmCalculatorDefaults.onlyDeliveries.includes(e.key)
                                    }))), window.wmCalculatorDefaults.deliveryTo && e.lists.deliverys.map((function(e) {
                                        return e.key
                                    })).includes(window.wmCalculatorDefaults.deliveryTo) && (e.calculatorForm.deliveryTo = window.wmCalculatorDefaults.deliveryTo), console.log(e.lists.deliverys.map((function(e) {
                                        return e.key
                                    })));
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            };
        const yr = je()(wr, [
            ["render", n]
        ]);
        var vr = yr,
            fr = l("ecee"),
            gr = l("c074"),
            Vr = l("ad3d"),
            _r = l("fb26"),
            Nr = l("8264"),
            Dr = l.n(Nr),
            kr = (l("004a"), l("159b"), l("ddb0"), l("466d"), l("47e2"));

        function Er() {
            var e = l("49f8"),
                t = {};
            return e.keys().forEach((function(l) {
                var r = l.match(/([A-Za-z0-9-_]+)\./i);
                if (r && r.length > 1) {
                    var a = r[1];
                    t[a] = e(l).default
                }
            })), t
        }
        var Sr = Object(kr["a"])({
            locale: "ru",
            fallbackLocale: "ru",
            messages: Er()
        });
        fr["c"].add(gr["a"]), fr["c"].add(gr["b"]);
        var Fr = Object(r["createApp"])(vr).use(Sr);
        Fr.use(_r["a"]), Fr.use(Dr.a), Fr.component("font-awesome-icon", Vr["a"]), Fr.mount("#wmCalculator")
    },
    7704: function(e, t, l) {
        "use strict";
        l.r(t), t["default"] = {
            "Калькулятор расходов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Калькулятор расходов"])
            },
            "Более": e => {
                const {
                    normalize: t
                } = e;
                return t(["Более"])
            },
            "Менее года": e => {
                const {
                    normalize: t
                } = e;
                return t(["Менее года"])
            },
            "Стоимость транспорта": e => {
                const {
                    normalize: t
                } = e;
                return t(["Стоимость транспорта"])
            },
            "Покупка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Покупка"])
            },
            "Тип транспорта": e => {
                const {
                    normalize: t
                } = e;
                return t(["Тип транспорта"])
            },
            "Вместе с лодкой": e => {
                const {
                    normalize: t
                } = e;
                return t(["Вместе с лодкой"])
            },
            "Тип топлива": e => {
                const {
                    normalize: t
                } = e;
                return t(["Тип топлива"])
            },
            "Длина": e => {
                const {
                    normalize: t
                } = e;
                return t(["Длина, м"])
            },
            "Тип лодки": e => {
                const {
                    normalize: t
                } = e;
                return t(["Тип лодки"])
            },
            "Вес": e => {
                const {
                    normalize: t
                } = e;
                return t(["Вес, кг"])
            },
            "Возврат НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["Возврат НДС"])
            },
            "Год выпуска": e => {
                const {
                    normalize: t
                } = e;
                return t(["Год выпуска"])
            },
            "Возраст, лет": e => {
                const {
                    normalize: t
                } = e;
                return t(["Возраст, лет"])
            },
            "Объем двигателя": e => {
                const {
                    normalize: t
                } = e;
                return t(["Объем двигателя, куб.см."])
            },
            "Аукционная площадка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Аукционная площадка"])
            },
            "Выбор аукциона": e => {
                const {
                    normalize: t
                } = e;
                return t(["Выбор аукциона"])
            },
            "Доставка транспорта в": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка транспорта в"])
            },
            "Ввоз через Германию": e => {
                const {
                    normalize: t
                } = e;
                return t(["Ввоз через Германию"])
            },
            "Доставка на дом": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка на дом"])
            },
            "Ретроавтомобиль (старше 30 лет)": e => {
                const {
                    normalize: t
                } = e;
                return t(["Ретроавтомобиль (старше 30 лет)"])
            },
            "ЭЛЕКТРОМОБИЛЬ": e => {
                const {
                    normalize: t
                } = e;
                return t(["ЭЛЕКТРОМОБИЛЬ"])
            },
            "ГИБРИД": e => {
                const {
                    normalize: t
                } = e;
                return t(["ГИБРИД"])
            },
            "ПОДКЛЮЧАЕМЫЙ ГИБРИД": e => {
                const {
                    normalize: t
                } = e;
                return t(["ПОДКЛЮЧАЕМЫЙ ГИБРИД"])
            },
            "РАСТАМОЖКА ДЛЯ ЛЬГОТНИКОВ": e => {
                const {
                    normalize: t
                } = e;
                return t(["РАСТАМОЖКА ДЛЯ ЛЬГОТНИКОВ"])
            },
            "Стоимость НЕТТО (Без НДС)": e => {
                const {
                    normalize: t
                } = e;
                return t(["Стоимость НЕТТО (Без НДС)"])
            },
            "Цель кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Цель кредита"])
            },
            "Стоимость": e => {
                const {
                    normalize: t
                } = e;
                return t(["Стоимость"])
            },
            "Срок кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Срок кредита"])
            },
            "Первоначальный взнос": e => {
                const {
                    normalize: t
                } = e;
                return t(["Первоначальный взнос"])
            },
            "Расчет кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Расчет кредита"])
            },
            "ИТОГО": e => {
                const {
                    normalize: t
                } = e;
                return t(["ИТОГО"])
            },
            "Покупка и доставка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Покупка и доставка"])
            },
            "Расходы по возврату НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["Расходы по возврату НДС"])
            },
            "Аукционный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Аукционный сбор"])
            },
            "* Приведен ориентировочный расчет аукционного сбора, расчет нужно уточнить при ставке на каждый конкретный лот": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Приведен ориентировочный расчет аукционного сбора, расчет нужно уточнить при ставке на каждый конкретный лот"])
            },
            "Транспортировка в порт США": e => {
                const {
                    normalize: t
                } = e;
                return t(["Транспортировка в порт"])
            },
            "Стоимость наших услуг": e => {
                const {
                    normalize: t
                } = e;
                return t(["Стоимость наших услуг"])
            },
            "Растаможка и оформление": e => {
                const {
                    normalize: t
                } = e;
                return t(["Растаможка и оформление"])
            },
            "Таможенная пошлина": e => {
                const {
                    normalize: t
                } = e;
                return t(["Таможенная пошлина"])
            },
            "Таможенный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Таможенный сбор"])
            },
            "Утилизационный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Утилизационный сбор"])
            },
            "Акцизный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Акцизный сбор"])
            },
            "Операционный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Операционный сбор"])
            },
            "НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["НДС"])
            },
            "Сертификат": e => {
                const {
                    normalize: t
                } = e;
                return t(["Сертификат"])
            },
            "По данным электронной таможенной службы": e => {
                const {
                    normalize: t
                } = e;
                return t(["По данным электронной таможенной службы"])
            },
            "НДС за электронные таможенные услуги": e => {
                const {
                    normalize: t
                } = e;
                return t(["НДС за электронные таможенные услуги"])
            },
            "Расходы на СВХ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Расходы на СВХ"])
            },
            "СБКТС и ГЛОНАСС (ЭВАК)": e => {
                const {
                    normalize: t
                } = e;
                return t(["СБКТС и ГЛОНАСС (ЭВАК)"])
            },
            "Эвакуатор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Эвакуатор"])
            },
            "Первичная регистрация": e => {
                const {
                    normalize: t
                } = e;
                return t(["Первичная регистрация"])
            },
            "Рассчитать кредит": e => {
                const {
                    normalize: t
                } = e;
                return t(["Рассчитать кредит"])
            },
            "Доставка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка"])
            },
            "Доставка от порта до": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка от порта до"])
            },
            "Беларусь, Минск": e => {
                const {
                    normalize: t
                } = e;
                return t(["Беларусь, Минск"])
            },
            "Минска": e => {
                const {
                    normalize: t
                } = e;
                return t(["Минска"])
            },
            "Польша, Варшава": e => {
                const {
                    normalize: t
                } = e;
                return t(["Польша, Варшава"])
            },
            "порта Бременхафен (Германия)": e => {
                const {
                    normalize: t
                } = e;
                return t(["порта Бременхафен (Германия)"])
            },
            "Оформление документов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Оформление документов"])
            },
            "куб.см.": e => {
                const {
                    normalize: t
                } = e;
                return t(["куб.см."])
            },
            "кг": e => {
                const {
                    normalize: t
                } = e;
                return t(["кг"])
            },
            "Доставка по морю + доставка на дом": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка по морю + доставка на дом"])
            },
            "Доставка по морю + доставка в порт EU": e => {
                const {
                    normalize: t
                } = e;
                return t(["Доставка по морю + доставка в порт EU"])
            },
            "Таможенная декларация": e => {
                const {
                    normalize: t
                } = e;
                return t(["Таможенная декларация"])
            },
            "ВНЕДОРОЖНИК МИНИВЭН": e => {
                const {
                    normalize: t
                } = e;
                return t(["ВНЕДОРОЖНИК МИНИВЭН"])
            },
            "* Все цены актуальны на момент расчета и могут измениться на момент доставки.": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Все цены актуальны на момент расчета и могут измениться на момент доставки."])
            },
            "* Ориентировочная стоимость брокерских услуг с разгрузкой вагона 450 евро": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Ориентировочная стоимость брокерских услуг с разгрузкой вагона 450 евро"])
            },
            "* Ориентировочная стоимость разгрузки и брокерских услуг - 450 евро, оплачивается напрямую клиентом брокеру в Бремерхафене": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Ориентировочная стоимость разгрузки и брокерских услуг - 450 евро, оплачивается напрямую клиентом брокеру в Бремерхафене"])
            },
            "Получение ПТС РФ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Получение ПТС РФ"])
            },
            "Брокерская оплата и документооборот": e => {
                const {
                    normalize: t
                } = e;
                return t(["Брокерская оплата и документооборот"])
            },
            "Высылка документов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Высылка документов"])
            },
            "Стоимость экспресс-оплаты в США": e => {
                const {
                    normalize: t
                } = e;
                return t(["Стоимость экспресс-оплаты в США"])
            },
            "Экспедиторский сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Экспедиторский сбор"])
            }
        }
    },
    "89b2": function(e, t, l) {
        "use strict";
        l.r(t), t["default"] = {
            "Калькулятор расходов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Kalkulator wydatków"])
            },
            "Более": e => {
                const {
                    normalize: t
                } = e;
                return t(["Więcej"])
            },
            "Менее года": e => {
                const {
                    normalize: t
                } = e;
                return t(["Менее года"])
            },
            "Стоимость транспорта": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wartość pojazdu"])
            },
            "Покупка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Zakup"])
            },
            "Тип транспорта": e => {
                const {
                    normalize: t
                } = e;
                return t(["Typ pojazdu"])
            },
            "Вместе с лодкой": e => {
                const {
                    normalize: t
                } = e;
                return t(["Razem z łodzią"])
            },
            "Тип топлива": e => {
                const {
                    normalize: t
                } = e;
                return t(["Rodzaj paliwa"])
            },
            "Длина": e => {
                const {
                    normalize: t
                } = e;
                return t(["Długość"])
            },
            "Тип лодки": e => {
                const {
                    normalize: t
                } = e;
                return t(["Typ łodzi"])
            },
            "Вес": e => {
                const {
                    normalize: t
                } = e;
                return t(["Waga"])
            },
            "Возврат НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["Zwrot VAT"])
            },
            "Год выпуска": e => {
                const {
                    normalize: t
                } = e;
                return t(["Rok produkcji"])
            },
            "Возраст, лет": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wiek pojazdu, lat"])
            },
            "Объем двигателя": e => {
                const {
                    normalize: t
                } = e;
                return t(["Pojemność silnika, cmЗ"])
            },
            "Аукционная площадка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Dom aukcyjny"])
            },
            "Выбор аукциона": e => {
                const {
                    normalize: t
                } = e;
                return t(["Portal aukcyjny"])
            },
            "Доставка транспорта в": e => {
                const {
                    normalize: t
                } = e;
                return t(["Dostawa do"])
            },
            "Ввоз через Германию": e => {
                const {
                    normalize: t
                } = e;
                return t(["Przywóz przez Niemcy"])
            },
            "Доставка на дом": e => {
                const {
                    normalize: t
                } = e;
                return t(["Dostawa pod dom"])
            },
            "Ретроавтомобиль (старше 30 лет)": e => {
                const {
                    normalize: t
                } = e;
                return t(["Auto zabytkowe (pow 30 lat)"])
            },
            "ЭЛЕКТРОМОБИЛЬ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Auta elektryczne"])
            },
            "ГИБРИД": e => {
                const {
                    normalize: t
                } = e;
                return t(["Hybryda"])
            },
            "ПОДКЛЮЧАЕМЫЙ ГИБРИД": e => {
                const {
                    normalize: t
                } = e;
                return t(["Hybryda plug-in"])
            },
            "РАСТАМОЖКА ДЛЯ ЛЬГОТНИКОВ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Preferencyjna odprawa celna"])
            },
            "Стоимость НЕТТО (Без НДС)": e => {
                const {
                    normalize: t
                } = e;
                return t(["Koszt netto (bez VAT)"])
            },
            "Цель кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Cel pożyczki"])
            },
            "Стоимость": e => {
                const {
                    normalize: t
                } = e;
                return t(["Koszt"])
            },
            "Срок кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Okres kredytowania"])
            },
            "Первоначальный взнос": e => {
                const {
                    normalize: t
                } = e;
                return t(["Płatność początkowa"])
            },
            "Расчет кредита": e => {
                const {
                    normalize: t
                } = e;
                return t(["Kalkulacja kredytu"])
            },
            "ИТОГО": e => {
                const {
                    normalize: t
                } = e;
                return t(["Razem"])
            },
            "Покупка и доставка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Zakup i dostawa"])
            },
            "Расходы по возврату НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wydatki na zwrot podatku VAT"])
            },
            "Аукционный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Prowizja aukcyjna"])
            },
            "* Приведен ориентировочный расчет аукционного сбора, расчет нужно уточнить при ставке на каждый конкретный лот": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Podana jest orientacyjna kalkulacja opłaty aukcyjnej; kalkulacja musi być określona przy licytacji każdej konkretnej działki."])
            },
            "Транспортировка в порт США": e => {
                const {
                    normalize: t
                } = e;
                return t(["Transport lądowy do portu USA"])
            },
            "Стоимость наших услуг": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wartość naszych usług"])
            },
            "Растаможка и оформление": e => {
                const {
                    normalize: t
                } = e;
                return t(["Odprawa celna i rejestracja"])
            },
            "Таможенная пошлина": e => {
                const {
                    normalize: t
                } = e;
                return t(["Cło"])
            },
            "Таможенный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Cło"])
            },
            "Утилизационный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Opłata recyklingowa"])
            },
            "Акцизный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Akcyza"])
            },
            "Операционный сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Opłata transakcyjna"])
            },
            "НДС": e => {
                const {
                    normalize: t
                } = e;
                return t(["Vat"])
            },
            "Сертификат": e => {
                const {
                    normalize: t
                } = e;
                return t(["Certyfikat"])
            },
            "По данным электронной таможенной службы": e => {
                const {
                    normalize: t
                } = e;
                return t(["Według e-cła"])
            },
            "НДС за электронные таможенные услуги": e => {
                const {
                    normalize: t
                } = e;
                return t(["VAT na elektroniczne usługi celne"])
            },
            "Расходы на СВХ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Koszty w BWH"])
            },
            "СБКТС и ГЛОНАСС (ЭВАК)": e => {
                const {
                    normalize: t
                } = e;
                return t(["SBKTS i GLONASS (EVAC)"])
            },
            "Эвакуатор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wózek holowniczy"])
            },
            "Первичная регистрация": e => {
                const {
                    normalize: t
                } = e;
                return t(["Rejestracja wstępna"])
            },
            "Рассчитать кредит": e => {
                const {
                    normalize: t
                } = e;
                return t(["Obliczanie kredytu"])
            },
            "Доставка": e => {
                const {
                    normalize: t
                } = e;
                return t(["Dostawa"])
            },
            "Доставка от порта до": e => {
                const {
                    normalize: t
                } = e;
                return t(["Transport morski do"])
            },
            "Беларусь, Минск": e => {
                const {
                    normalize: t
                } = e;
                return t(["Białoruś, Mińsk"])
            },
            "Минска": e => {
                const {
                    normalize: t
                } = e;
                return t(["Mińsk"])
            },
            "Польша, Варшава": e => {
                const {
                    normalize: t
                } = e;
                return t(["Polska, Warszawa"])
            },
            "порта Бременхафен (Германия)": e => {
                const {
                    normalize: t
                } = e;
                return t(["portu Bremenhaven (Niemcy)"])
            },
            "Оформление документов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Оформление документов"])
            },
            "куб.см.": e => {
                const {
                    normalize: t
                } = e;
                return t(["cmЗ"])
            },
            "кг": e => {
                const {
                    normalize: t
                } = e;
                return t(["kg"])
            },
            "Доставка по морю + доставка на дом": e => {
                const {
                    normalize: t
                } = e;
                return t(["Transport morski + dostawa pod dom"])
            },
            "Доставка по морю + доставка в порт EU": e => {
                const {
                    normalize: t
                } = e;
                return t(["Koszt transportu morskiego do portu w EU"])
            },
            "Таможенная декларация": e => {
                const {
                    normalize: t
                } = e;
                return t(["Cło"])
            },
            "ВНЕДОРОЖНИК МИНИВЭН": e => {
                const {
                    normalize: t
                } = e;
                return t(["Samochód terenowy 1\\3"])
            },
            "* Все цены актуальны на момент расчета и могут измениться на момент доставки.": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Niektóre ceny mogą zmieniać się  w momencie dostawy auta"])
            },
            "* Ориентировочная стоимость брокерских услуг с разгрузкой вагона 450 евро": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Orientacyjna cena za usługi brokerskie z rozładunkiem auta 450 euro"])
            },
            "* Ориентировочная стоимость разгрузки и брокерских услуг - 450 евро, оплачивается напрямую клиентом брокеру в Бремерхафене": e => {
                const {
                    normalize: t
                } = e;
                return t(["* Przybliżony koszt rozładunku i pośrednictwa wynosi 450 euro, płatne bezpośrednio przez klienta brokerowi w Bremerhaven."])
            },
            "Получение ПТС РФ": e => {
                const {
                    normalize: t
                } = e;
                return t(["Получение ПТС РФ"])
            },
            "Брокерская оплата и документооборот": e => {
                const {
                    normalize: t
                } = e;
                return t(["Opłata brokerska"])
            },
            "Высылка документов": e => {
                const {
                    normalize: t
                } = e;
                return t(["Wysyłka dokumentów"])
            },
            "Стоимость экспресс-оплаты в США": e => {
                const {
                    normalize: t
                } = e;
                return t(["Koszt płatności ekspresowej w USA"])
            },
            "Экспедиторский сбор": e => {
                const {
                    normalize: t
                } = e;
                return t(["Opłata za spedycję"])
            }
        }
    }
});
//# sourceMappingURL=app.js.map