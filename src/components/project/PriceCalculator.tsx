"use client";

import { useState } from "react";
import { Calculator, IndianRupee, TrendingUp } from "lucide-react";

export default function PriceCalculator() {
    const [plotSize, setPlotSize] = useState(300);
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(15);

    const pricePerSqYard = 11667; // ₹35L for 300 sq yards
    const totalPrice = plotSize * pricePerSqYard;
    const downPayment = totalPrice - loanAmount;
    const interestRate = 8.5; // Annual rate

    // Calculate EMI using formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = tenure * 12;
    const emi =
        (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return (
        <section id="pricing" className="section-padding bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-corporate-blue mb-4 md:mb-6">
                            EMI <span className="text-gradient">Calculator</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            Plan your investment with our easy EMI calculator
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Calculator Form */}
                        <div className="space-y-6 md:space-y-8">
                            {/* Plot Size */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-semibold text-corporate-blue">
                                        Plot Size (Sq. Yards)
                                    </label>
                                    <span className="text-xl md:text-2xl font-bold text-project-gold">
                                        {plotSize}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="200"
                                    max="500"
                                    step="100"
                                    value={plotSize}
                                    onChange={(e) => setPlotSize(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-project-gold"
                                    suppressHydrationWarning
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>200</span>
                                    <span>500</span>
                                </div>
                            </div>

                            {/* Loan Amount */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-semibold text-corporate-blue">
                                        Loan Amount (₹)
                                    </label>
                                    <span className="text-xl md:text-2xl font-bold text-project-gold">
                                        ₹{(loanAmount / 100000).toFixed(1)}L
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1000000"
                                    max={totalPrice * 0.9}
                                    step="100000"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-project-gold"
                                    suppressHydrationWarning
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>₹10L</span>
                                    <span>₹{((totalPrice * 0.9) / 100000).toFixed(0)}L</span>
                                </div>
                            </div>

                            {/* Tenure */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-semibold text-corporate-blue">
                                        Loan Tenure (Years)
                                    </label>
                                    <span className="text-xl md:text-2xl font-bold text-project-gold">
                                        {tenure}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="30"
                                    step="5"
                                    value={tenure}
                                    onChange={(e) => setTenure(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-project-gold"
                                    suppressHydrationWarning
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>5 Years</span>
                                    <span>30 Years</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600">
                                    <strong>Interest Rate:</strong> {interestRate}% p.a.
                                    (indicative)
                                </p>
                            </div>
                        </div>

                        {/* Results Panel */}
                        <div className="bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-2xl p-6 md:p-8 text-white">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <Calculator className="h-6 w-6 md:h-8 md:w-8 text-project-gold" />
                                <h3 className="text-xl md:text-2xl font-display font-bold">
                                    Payment Summary
                                </h3>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                {/* Total Plot Price */}
                                <div className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <p className="text-sm text-white/70 mb-1 md:mb-2">
                                        Total Plot Price
                                    </p>
                                    <p className="text-3xl md:text-4xl font-display font-bold text-project-gold">
                                        ₹{(totalPrice / 100000).toFixed(2)}L
                                    </p>
                                    <p className="text-xs text-white/60 mt-1">
                                        @ ₹{pricePerSqYard.toLocaleString()}/sq.yd
                                    </p>
                                </div>

                                {/* Down Payment */}
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-sm text-white/80">Down Payment</span>
                                    <span className="text-lg md:text-xl font-bold">
                                        ₹{(downPayment / 100000).toFixed(2)}L
                                    </span>
                                </div>

                                {/* Monthly EMI */}
                                <div className="p-4 md:p-6 bg-project-gold rounded-xl">
                                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                                        <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                                        <p className="text-sm font-semibold">Monthly EMI</p>
                                    </div>
                                    <p className="text-3xl md:text-5xl font-display font-bold">
                                        ₹{emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                    </p>
                                </div>

                                {/* Total Payment */}
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <span className="text-xs md:text-sm text-white/80">
                                        Total Payment (Principal + Interest)
                                    </span>
                                    <span className="text-lg md:text-xl font-bold">
                                        ₹
                                        {((emi * numberOfPayments) / 100000).toFixed(2)}L
                                    </span>
                                </div>
                            </div>

                            <button className="w-full mt-6 md:mt-8 px-6 py-4 bg-white text-project-gold font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Get Detailed Quote
                            </button>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-500 text-center mt-8">
                        * Calculations are indicative and for reference only. Actual EMI may
                        vary based on bank policies and individual eligibility.
                    </p>
                </div>
            </div>
        </section>
    );
}
