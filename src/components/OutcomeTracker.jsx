/**
 * Outcome Tracker Component
 * 
 * Real-time visualization component that displays project metrics and their changes
 * throughout simulation phases. Provides visual feedback on decision impacts with:
 * - Color-coded progress indicators (green/yellow/red based on performance)
 * - Dynamic metric calculations comparing current vs. initial values
 * - Support for both traditional SDLC and AI-enhanced metrics
 * - Animated progress bars with smooth transitions
 * - Phase progression indicator
 * - Contextual icons and formatting for different metric types
 * 
 * Helps users understand the immediate and cumulative effects of their decisions
 * on project success factors like budget, timeline, quality, and satisfaction.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.context - Current project context with metric values
 * @param {Object} props.initialContext - Initial project context for comparison
 * @param {string} props.currentPhase - Name of the current simulation phase
 * @param {number} props.totalPhases - Total number of phases in the simulation
 */

// React core imports
import React from "react";                    // Core React for component functionality

// Animation library for smooth visual transitions
import { motion } from "framer-motion";        // Animation components for enhanced UX

/**
 * OutcomeTracker Component
 * 
 * Displays real-time project metrics with visual indicators and progress tracking.
 * Adapts display based on whether simulation includes AI-enhanced features.
 */
const OutcomeTracker = ({ context, initialContext, currentPhase, totalPhases }) => {
  // Base metrics configuration for all simulation types
  // Each metric includes display properties and formatting information
  const baseMetrics = [
    { key: 'budget', label: 'Budget', icon: '💰', color: '#1ABC9C', unit: '$' },           // Financial tracking with dollar formatting
    { key: 'timeline', label: 'Timeline', icon: '⏰', color: '#16A085', unit: 'months' },        // Time tracking with month formatting
    { key: 'userSatisfaction', label: 'User Satisfaction', icon: '😊', color: '#4bb1b4ff' }, // User happiness metric (percentage)
    { key: 'security', label: 'Security', icon: '🔒', color: '#325fa1ff' },                 // Security posture metric (percentage)
    { key: 'performance', label: 'Performance', icon: '⚡', color: '#2dac6cff' },              // System performance metric (percentage)
    { key: 'reputation', label: 'Reputation', icon: '⭐', color: '#4496a5ff' }                   // Project/team reputation metric (percentage)
  ];
  
  // Conditionally add AI efficiency metric for AI-enhanced simulations
  // This metric only appears when the simulation includes AI-augmented features
  const metrics = context.aiEfficiency !== undefined 
    ? [...baseMetrics, { key: 'aiEfficiency', label: 'AI Efficiency', icon: '🤖', color: '#667eea' }] // AI utilization effectiveness
    : baseMetrics;
  
  // Determine simulation type for conditional rendering and behavior
  const isAIEnhanced = context.aiEfficiency !== undefined;

  /**
   * Formats metric values for display based on metric type
   * 
   * @param {Object} metric - Metric configuration object
   * @param {number} value - Current metric value
   * @param {number} initialValue - Initial metric value (for comparison)
   * @returns {string} Formatted display string with appropriate units
   */
  const getMetricDisplay = (metric, value, initialValue) => {
    if (metric.key === 'budget') {
      // Format budget with currency symbol and thousands separators
      return `${metric.unit}${value.toLocaleString()}`;
    } else if (metric.key === 'timeline') {
      // Format timeline with numeric value and time unit
      return `${value} ${metric.unit}`;
    } else {
      // Format percentage-based metrics (satisfaction, security, performance, etc.)
      return `${value}%`;
    }
  };

  /**
   * Determines progress indicator color based on metric performance
   * 
   * Uses different logic for different metric types:
   * - Budget/Timeline: Lower values are better (green for under/on target)
   * - Other metrics: Higher values are better (green for high performance)
   * 
   * @param {number} value - Current metric value
   * @param {number} initialValue - Initial metric value for comparison
   * @param {string} metricKey - Metric identifier for type-specific logic
   * @returns {string} CSS color code for progress indicator
   */
  const getProgressColor = (value, initialValue, metricKey) => {
    if (metricKey === 'budget' || metricKey === 'timeline') {
      // For budget and timeline, lower values indicate better performance
      return value <= initialValue ? '#2ecc71' :           // Green: on or under target
             value <= initialValue * 1.2 ? '#f39c12' :    // Yellow: 20% over target
             '#e74c3c';                                    // Red: more than 20% over target
    } else {
      // For quality metrics, higher values indicate better performance
      return value >= 80 ? '#2ecc71' :                     // Green: excellent performance (80%+)
             value >= 60 ? '#f39c12' :                     // Yellow: acceptable performance (60-79%)
             '#e74c3c';                                     // Red: poor performance (<60%)
    }
  };

  const getChangeIndicator = (current, initial, metricKey) => {
    const diff = current - initial;
    if (diff === 0) return null;
    
    const isPositive = metricKey === 'budget' || metricKey === 'timeline' ? diff < 0 : diff > 0;
    return {
      value: Math.abs(diff),
      isPositive,
      symbol: isPositive ? '↗' : '↘',
      color: isPositive ? '#2ecc71' : '#e74c3c'
    };
  };

  return (
    <div style={trackerStyles.container}>
      <div style={trackerStyles.progressHeader}>
        <div style={trackerStyles.phaseProgress}>
          <span style={trackerStyles.progressLabel}>Progress:</span>
          <div style={trackerStyles.progressBar}>
            <motion.div
              style={{
                ...trackerStyles.progressFill,
                width: `${(currentPhase / totalPhases) * 100}%`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(currentPhase / totalPhases) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <span style={trackerStyles.progressText}>
            {currentPhase} / {totalPhases} phases
          </span>
        </div>
      </div>

      <div style={trackerStyles.metricsContainer}>
        <h3 style={trackerStyles.metricsTitle}>
          {isAIEnhanced ? '🤖 AI-Enhanced Metrics' : 'Project Metrics'}
        </h3>
        <div style={trackerStyles.metricsGrid}>
          {metrics.map((metric) => {
            const currentValue = context[metric.key];
            const initialValue = initialContext[metric.key];
            const change = getChangeIndicator(currentValue, initialValue, metric.key);
            const progressColor = getProgressColor(currentValue, initialValue, metric.key);
            
            return (
              <motion.div
                key={metric.key}
                style={{
                  ...trackerStyles.metricCard,
                  borderLeft: `4px solid ${metric.color}`
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div style={trackerStyles.metricHeader}>
                  <span style={trackerStyles.metricIcon}>{metric.icon}</span>
                  <span style={trackerStyles.metricLabel}>{metric.label}</span>
                  {change && (
                    <span 
                      style={{
                        ...trackerStyles.changeIndicator,
                        color: change.color
                      }}
                    >
                      {change.symbol} {metric.key === 'budget' || metric.key === 'timeline' ? change.value : `${change.value}%`}
                    </span>
                  )}
                </div>
                
                <div style={trackerStyles.metricValue}>
                  <span style={{ color: progressColor, fontWeight: '600' }}>
                    {getMetricDisplay(metric, currentValue, initialValue)}
                  </span>
                </div>

                {metric.key !== 'budget' && metric.key !== 'timeline' && (
                  <div style={trackerStyles.metricBarContainer}>
                    <div style={trackerStyles.metricBar}>
                      <motion.div
                        style={{
                          ...trackerStyles.metricBarFill,
                          background: progressColor,
                          width: `${Math.min(currentValue, 100)}%`
                        }}
                        initial={{ width: `${initialValue}%` }}
                        animate={{ width: `${Math.min(currentValue, 100)}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div style={trackerStyles.summaryContainer}>
        <div style={trackerStyles.overallHealth}>
          <span style={trackerStyles.healthLabel}>Project Health:</span>
          <div style={trackerStyles.healthIndicator}>
            {(() => {
              const avgScore = (context.userSatisfaction + context.security + context.performance + context.reputation) / 4;
              const healthColor = avgScore >= 80 ? '#2ecc71' : avgScore >= 60 ? '#f39c12' : '#e74c3c';
              const healthLabel = avgScore >= 80 ? 'Excellent' : avgScore >= 60 ? 'Good' : 'Needs Attention';
              
              return (
                <span style={{ color: healthColor, fontWeight: '600' }}>
                  {healthLabel} ({Math.round(avgScore)}%)
                </span>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const trackerStyles = {
  container: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1rem',
    marginTop: '1rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  progressHeader: {
    marginBottom: '1.5rem'
  },
  phaseProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  progressLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  },
  progressBar: {
    flex: 1,
    height: '8px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)',
    borderRadius: '4px',
    transition: 'width 0.8s ease'
  },
  progressText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    minWidth: 'fit-content'
  },
  metricsContainer: {
    marginBottom: '1rem'
  },
  metricsTitle: {
    fontSize: '1.1rem',
    color: '#1ABC9C',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '0.75rem'
  },
  metricCard: {
    background: 'rgba(26, 188, 156, 0.1)',
    borderRadius: '8px',
    padding: '0.75rem',
    transition: 'all 0.2s ease',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    flexWrap: 'wrap'
  },
  metricIcon: {
    fontSize: '1.2rem'
  },
  metricLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    flex: 1
  },
  changeIndicator: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.4rem',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '4px'
  },
  metricValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  metricBarContainer: {
    marginTop: '0.5rem'
  },
  metricBar: {
    height: '4px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  metricBarFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.6s ease'
  },
  summaryContainer: {
    borderTop: '1px solid #dee2e6',
    paddingTop: '1rem',
    marginTop: '1rem'
  },
  overallHealth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  healthLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  },
  healthIndicator: {
    fontSize: '1rem'
  }
};

export default OutcomeTracker;